import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EnvironmentInjector,
  OnDestroy,
  Optional,
  ViewChild,
  ViewContainerRef,
  createEnvironmentInjector,
  inject,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  SKY_STACKING_CONTEXT,
  SkyMediaQueryService,
  SkyResizeObserverMediaQueryService,
} from '@skyux/core';

import { BehaviorSubject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

import { SkyModalAdapterService } from './modal-adapter.service';
import { SkyModalConfiguration } from './modal-configuration';
import { SkyModalHostContext } from './modal-host-context';
import { SkyModalHostService } from './modal-host.service';
import { SkyModalInstance } from './modal-instance';
import { SkyModalConfigurationInterface } from './modal.interface';

/**
 * @internal
 */
@Component({
  selector: 'sky-modal-host',
  templateUrl: './modal-host.component.html',
  styleUrls: ['./modal-host.component.scss'],
  viewProviders: [SkyModalAdapterService],
})
export class SkyModalHostComponent implements OnDestroy {
  public get modalOpen() {
    return SkyModalHostService.openModalCount > 0;
  }

  public get backdropZIndex() {
    return SkyModalHostService.backdropZIndex;
  }

  /**
   * Use `any` for backwards-compatibility with Angular 4-7.
   * See: https://github.com/angular/angular/issues/30654
   * TODO: Remove the `any` in a breaking change.
   * @internal
   */
  @ViewChild('target', {
    read: ViewContainerRef,
    static: true,
  } as any)
  public target: ViewContainerRef | undefined;

  #adapter: SkyModalAdapterService;
  #environmentInjector = inject(EnvironmentInjector);
  #router: Router | undefined;
  #changeDetector: ChangeDetectorRef;
  #modalHostContext: SkyModalHostContext;
  #elRef: ElementRef;

  #modalInstances: SkyModalInstance[] = [];

  constructor(
    adapter: SkyModalAdapterService,
    changeDetector: ChangeDetectorRef,
    modalHostContext: SkyModalHostContext,
    elRef: ElementRef,
    @Optional() router?: Router
  ) {
    this.#adapter = adapter;
    this.#router = router;
    this.#changeDetector = changeDetector;
    this.#modalHostContext = modalHostContext;
    this.#elRef = elRef;
  }

  public ngOnDestroy(): void {
    // Close all modal instances before disposing of the host container.
    this.#closeAllModalInstances();
    this.#modalHostContext.args.teardownCallback();
  }

  public open(
    modalInstance: SkyModalInstance,
    component: any,
    config?: SkyModalConfigurationInterface
  ): void {
    /* Ignore coverage as we specify the target element and so the view child should never be undefined unless
     * we were to call the `open` method in an early lifecycle hook. */
    /* istanbul ignore next */
    if (!this.target) {
      return;
    }

    const params: SkyModalConfigurationInterface = Object.assign({}, config);

    const hostService = new SkyModalHostService();
    hostService.fullPage = !!params.fullPage;

    const adapter = this.#adapter;
    const modalOpener: HTMLElement = adapter.getModalOpener();

    let isOpen = true;

    params.providers ||= [];
    params.providers.push(
      { provide: SkyResizeObserverMediaQueryService },
      {
        provide: SkyModalHostService,
        useValue: hostService,
      },
      {
        provide: SkyModalConfiguration,
        useValue: params,
      },
      {
        provide: SkyMediaQueryService,
        useExisting: SkyResizeObserverMediaQueryService,
      },
      {
        provide: SKY_STACKING_CONTEXT,
        useValue: {
          zIndex: new BehaviorSubject(hostService.getModalZIndex())
            .asObservable()
            .pipe(takeUntil(modalInstance.closed)),
        },
      }
    );

    adapter.setPageScroll(SkyModalHostService.openModalCount > 0);
    adapter.toggleFullPageModalClass(
      SkyModalHostService.fullPageModalCount > 0
    );

    const providers = params.providers || /* istanbul ignore next */ [];
    const environmentInjector = createEnvironmentInjector(
      providers,
      this.#environmentInjector
    );

    const modalComponentRef = this.target.createComponent(component, {
      environmentInjector,
    });

    // modal element that was just opened
    const modalElement = modalComponentRef.location;

    modalInstance.adapter = this.#adapter;
    modalInstance.componentRef = modalComponentRef;

    this.#registerModalInstance(modalInstance);

    // hiding all elements at the modal-host level from screen readers when the a modal is opened
    this.#adapter.hideHostSiblingsFromScreenReaders(this.#elRef);
    if (
      SkyModalHostService.openModalCount > 1 &&
      SkyModalHostService.topModal === hostService
    ) {
      // hiding the lower modals when more than one modal is opened
      this.#adapter.hidePreviousModalFromScreenReaders(modalElement);
    }

    const closeModal = () => {
      // unhide siblings if last modal is closing
      if (SkyModalHostService.openModalCount === 1) {
        this.#adapter.unhideOrRestoreHostSiblingsFromScreenReaders();
      } else if (SkyModalHostService.topModal === hostService) {
        // if there are more than 1 modal then unhide the one behind this one before closing it
        this.#adapter.unhidePreviousModalFromScreenReaders(modalElement);
      }

      hostService.destroy();
      adapter.setPageScroll(SkyModalHostService.openModalCount > 0);
      adapter.toggleFullPageModalClass(
        SkyModalHostService.fullPageModalCount > 0
      );
      /* istanbul ignore else */
      /* sanity check */
      if (modalOpener && modalOpener.focus) {
        modalOpener.focus();
      }
      modalComponentRef.destroy();
    };

    hostService.openHelp.subscribe((helpKey) => {
      modalInstance.openHelp(helpKey);
    });

    hostService.close.subscribe(() => {
      modalInstance.close();
    });

    this.#router?.events.pipe(takeWhile(() => isOpen)).subscribe((event) => {
      /* istanbul ignore else */
      if (event instanceof NavigationStart) {
        modalInstance.close();
      }
    });

    modalInstance.closed.subscribe(() => {
      isOpen = false;
      this.#unregisterModalInstance(modalInstance);
      closeModal();
    });

    // Necessary if the host was created via a consumer's lifecycle hook such as ngOnInit
    this.#changeDetector.detectChanges();
  }

  #registerModalInstance(instance: SkyModalInstance): void {
    this.#modalInstances.push(instance);
  }

  #unregisterModalInstance(instance: SkyModalInstance): void {
    this.#modalInstances.slice(this.#modalInstances.indexOf(instance), 1);
  }

  #closeAllModalInstances(): void {
    for (const instance of this.#modalInstances) {
      instance.close();
    }
  }
}

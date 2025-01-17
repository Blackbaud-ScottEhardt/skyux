import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkyViewkeeperModule } from '@skyux/core';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyIconModule, SkyWaitModule } from '@skyux/indicators';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyInfiniteScrollModule, SkyRepeaterModule } from '@skyux/lists';
import { SkyModalModule } from '@skyux/modals';
import { SkyThemeModule } from '@skyux/theme';

import { SkySearchModule } from '../search/search.module';
import { SkyLookupResourcesModule } from '../shared/sky-lookup-resources.module';

import { SkySelectionModalItemSelectedPipe } from './selection-modal-item-selected.pipe';
import { SkySelectionModalComponent } from './selection-modal.component';
import { SkySelectionModalService } from './selection-modal.service';

@NgModule({
  declarations: [SkySelectionModalComponent, SkySelectionModalItemSelectedPipe],
  imports: [
    CommonModule,
    SkyCheckboxModule,
    SkyIconModule,
    SkyInfiniteScrollModule,
    SkyLookupResourcesModule,
    SkyModalModule,
    SkyRepeaterModule,
    SkySearchModule,
    SkyThemeModule,
    SkyToolbarModule,
    SkyViewkeeperModule,
    SkyWaitModule,
  ],
  providers: [SkySelectionModalService],
})
export class SkySelectionModalModule {}

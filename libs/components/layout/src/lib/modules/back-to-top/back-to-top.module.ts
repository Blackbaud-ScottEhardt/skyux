import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkyDockModule } from '@skyux/core';
import { SkyThemeModule } from '@skyux/theme';

import { SkyLayoutResourcesModule } from '../shared/sky-layout-resources.module';

import { SkyBackToTopComponent } from './back-to-top.component';
import { SkyBackToTopDirective } from './back-to-top.directive';

@NgModule({
  declarations: [SkyBackToTopComponent, SkyBackToTopDirective],
  imports: [
    CommonModule,
    SkyDockModule,
    SkyLayoutResourcesModule,
    SkyThemeModule,
  ],
  exports: [SkyBackToTopComponent, SkyBackToTopDirective],
})
export class SkyBackToTopModule {}

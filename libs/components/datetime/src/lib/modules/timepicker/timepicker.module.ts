import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkyAffixModule, SkyOverlayModule } from '@skyux/core';
import { SkyIconModule } from '@skyux/indicators';
import { SkyThemeModule } from '@skyux/theme';

import { SkyDatetimeResourcesModule } from '../shared/sky-datetime-resources.module';

import { SkyTimepickerComponent } from './timepicker.component';
import { SkyTimepickerInputDirective } from './timepicker.directive';

@NgModule({
  declarations: [SkyTimepickerInputDirective, SkyTimepickerComponent],
  imports: [
    CommonModule,
    SkyIconModule,
    SkyDatetimeResourcesModule,
    SkyAffixModule,
    SkyOverlayModule,
    SkyThemeModule,
  ],
  exports: [SkyTimepickerInputDirective, SkyTimepickerComponent],
})
export class SkyTimepickerModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkyIdModule, SkyTrimModule } from '@skyux/core';
import { SkyChevronModule, SkyIconModule } from '@skyux/indicators';
import { SkyThemeModule } from '@skyux/theme';

import { SkyTilesResourcesModule } from '../../shared/sky-tiles-resources.module';

import { SkyTileSummaryComponent } from './tile-summary.component';
import { SkyTileTitleComponent } from './tile-title.component';
import { SkyTileComponent } from './tile.component';

@NgModule({
  declarations: [
    SkyTileComponent,
    SkyTileSummaryComponent,
    SkyTileTitleComponent,
  ],
  imports: [
    CommonModule,
    SkyChevronModule,
    SkyIdModule,
    SkyIconModule,
    SkyThemeModule,
    SkyTilesResourcesModule,
    SkyTrimModule,
  ],
  exports: [SkyTileComponent, SkyTileSummaryComponent, SkyTileTitleComponent],
})
export class SkyTileModule {}

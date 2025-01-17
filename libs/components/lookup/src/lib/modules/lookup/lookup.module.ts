import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyViewkeeperModule } from '@skyux/core';
import { SkyCheckboxModule } from '@skyux/forms';
import {
  SkyIconModule,
  SkyTokensModule,
  SkyWaitModule,
} from '@skyux/indicators';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyInfiniteScrollModule, SkyRepeaterModule } from '@skyux/lists';
import { SkyModalModule } from '@skyux/modals';
import { SkyThemeModule } from '@skyux/theme';

import { SkyAutocompleteModule } from '../autocomplete/autocomplete.module';
import { SkySearchModule } from '../search/search.module';
import { SkySelectionModalModule } from '../selection-modal/selection-modal.module';
import { SkyLookupResourcesModule } from '../shared/sky-lookup-resources.module';

import { SkyLookupShowMoreModalComponent } from './lookup-show-more-modal.component';
import { SkyLookupComponent } from './lookup.component';

@NgModule({
  declarations: [SkyLookupComponent, SkyLookupShowMoreModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    SkyAutocompleteModule,
    SkyCheckboxModule,
    SkyIconModule,
    SkyInfiniteScrollModule,
    SkyLookupResourcesModule,
    SkyModalModule,
    SkyRepeaterModule,
    SkySearchModule,
    SkySelectionModalModule,
    SkyThemeModule,
    SkyTokensModule,
    SkyToolbarModule,
    SkyViewkeeperModule,
    SkyWaitModule,
  ],
  exports: [SkyLookupComponent],
})
export class SkyLookupModule {}

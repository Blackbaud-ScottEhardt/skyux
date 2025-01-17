import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkyViewkeeperModule } from '@skyux/core';
import { SkyDataManagerModule } from '@skyux/data-manager';
import { SkyIconModule } from '@skyux/indicators';
import { SkyInlineDeleteModule } from '@skyux/layout';
import { SkyThemeModule } from '@skyux/theme';

import { AgGridModule } from 'ag-grid-angular';

import { SkyAgGridResourcesModule } from '../shared/sky-ag-grid-resources.module';

import { SkyAgGridDataManagerAdapterDirective } from './ag-grid-data-manager-adapter.directive';
import { SkyAgGridRowDeleteComponent } from './ag-grid-row-delete.component';
import { SkyAgGridRowDeleteDirective } from './ag-grid-row-delete.directive';
import { SkyAgGridWrapperComponent } from './ag-grid-wrapper.component';
import { SkyAgGridService } from './ag-grid.service';
import { SkyAgGridCellEditorAutocompleteModule } from './cell-editors/cell-editor-autocomplete/cell-editor-autocomplete.module';
import { SkyAgGridCellEditorCurrencyModule } from './cell-editors/cell-editor-currency/cell-editor-currency.module';
import { SkyAgGridCellEditorDatepickerModule } from './cell-editors/cell-editor-datepicker/cell-editor-datepicker.module';
import { SkyAgGridCellEditorLookupModule } from './cell-editors/cell-editor-lookup/cell-editor-lookup.module';
import { SkyAgGridCellEditorNumberModule } from './cell-editors/cell-editor-number/cell-editor-number.module';
import { SkyAgGridCellEditorTextModule } from './cell-editors/cell-editor-text/cell-editor-text.module';
import { SkyAgGridCellRendererCurrencyModule } from './cell-renderers/cell-renderer-currency/cell-renderer-currency.module';
import { SkyAgGridCellRendererLookupModule } from './cell-renderers/cell-renderer-lookup/cell-renderer-lookup.module';
import { SkyAgGridCellRendererRowSelectorModule } from './cell-renderers/cell-renderer-row-selector/cell-renderer-row-selector.module';
import { SkyAgGridCellRendererValidatorTooltipModule } from './cell-renderers/cell-renderer-validator-tooltip/cell-renderer-validator-tooltip.module';
import { SkyAgGridCellValidatorModule } from './cell-validator/ag-grid-cell-validator.module';
import { SkyAgGridHeaderGroupComponent } from './header/header-group.component';
import { SkyAgGridHeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SkyAgGridDataManagerAdapterDirective,
    SkyAgGridHeaderComponent,
    SkyAgGridHeaderGroupComponent,
    SkyAgGridRowDeleteComponent,
    SkyAgGridRowDeleteDirective,
    SkyAgGridWrapperComponent,
  ],
  imports: [
    AgGridModule,
    CommonModule,
    SkyAgGridCellEditorAutocompleteModule,
    SkyAgGridCellEditorDatepickerModule,
    SkyAgGridCellEditorLookupModule,
    SkyAgGridCellEditorNumberModule,
    SkyAgGridCellEditorCurrencyModule,
    SkyAgGridCellRendererCurrencyModule,
    SkyAgGridCellRendererLookupModule,
    SkyAgGridCellRendererRowSelectorModule,
    SkyAgGridCellRendererValidatorTooltipModule,
    SkyAgGridCellValidatorModule,
    SkyAgGridCellEditorTextModule,
    SkyAgGridResourcesModule,
    SkyDataManagerModule,
    SkyIconModule,
    SkyInlineDeleteModule,
    SkyViewkeeperModule,
    SkyThemeModule,
  ],
  exports: [
    SkyAgGridDataManagerAdapterDirective,
    SkyAgGridRowDeleteComponent,
    SkyAgGridRowDeleteDirective,
    SkyAgGridWrapperComponent,
    SkyAgGridHeaderComponent,
    SkyAgGridHeaderGroupComponent,
  ],
  providers: [SkyAgGridService],
})
export class SkyAgGridModule {}

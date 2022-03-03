/**
 * NOTICE: DO NOT MODIFY THIS FILE!
 * The contents of this file were automatically generated by
 * the 'ng generate @skyux/i18n:lib-resources-module modules/shared/sky-text-editor' schematic.
 * To update this file, simply rerun the command.
 */
import { NgModule } from '@angular/core';
import {
  SKY_LIB_RESOURCES_PROVIDERS,
  SkyAppLocaleInfo,
  SkyI18nModule,
  SkyLibResources,
  SkyLibResourcesProvider,
  getLibStringForLocale,
} from '@skyux/i18n';

const RESOURCES: { [locale: string]: SkyLibResources } = {
  'EN-US': {
    skyux_text_editor_format_menu_action_bold_label: { message: 'Bold' },
    skyux_text_editor_format_menu_action_bold_key_shortcut: {
      message: 'Ctrl+B',
    },
    skyux_text_editor_format_menu_action_italic_label: { message: 'Italic' },
    skyux_text_editor_format_menu_action_italic_key_shortcut: {
      message: 'Ctrl+I',
    },
    skyux_text_editor_format_menu_action_underline_label: {
      message: 'Underline',
    },
    skyux_text_editor_format_menu_action_underline_key_shortcut: {
      message: 'Ctrl+U',
    },
    skyux_text_editor_format_menu_action_strikethrough_label: {
      message: 'Strikethrough',
    },
    skyux_text_editor_format_menu_action_clear_formatting_label: {
      message: 'Clear formatting',
    },
    skyux_text_editor_edit_menu_action_undo_label: { message: 'Undo' },
    skyux_text_editor_edit_menu_action_undo_key_shortcut: { message: 'Ctrl+Z' },
    skyux_text_editor_edit_menu_action_redo_label: { message: 'Redo' },
    skyux_text_editor_edit_menu_action_redo_key_shortcut: { message: 'Ctrl+Y' },
    skyux_text_editor_edit_menu_action_cut_label: { message: 'Cut' },
    skyux_text_editor_edit_menu_action_cut_key_shortcut: { message: 'Ctrl+X' },
    skyux_text_editor_edit_menu_action_copy_label: { message: 'Copy' },
    skyux_text_editor_edit_menu_action_copy_key_shortcut: { message: 'Ctrl+C' },
    skyux_text_editor_edit_menu_action_paste_label: { message: 'Paste' },
    skyux_text_editor_edit_menu_action_paste_key_shortcut: {
      message: 'Ctrl+V',
    },
    skyux_text_editor_edit_menu_action_select_all_label: {
      message: 'Select all',
    },
    skyux_text_editor_edit_menu_action_select_all_key_shortcut: {
      message: 'Ctrl+A',
    },
    skyux_text_editor_menubar_dropdown_button_edit_label: { message: 'Edit' },
    skyux_text_editor_menubar_dropdown_button_format_label: {
      message: 'Format',
    },
    skyux_text_editor_menubar_dropdown_button_insert_label: {
      message: 'Insert merge field',
    },
    skyux_text_editor_url_modal_header_label: { message: 'Create link' },
    skyux_text_editor_url_modal_url_label: {
      message: 'Enter a URL to link to:',
    },
    skyux_text_editor_url_modal_open_label: {
      message: 'Where should it open?',
    },
    skyux_text_editor_url_modal_current_option_label: {
      message: 'Current window',
    },
    skyux_text_editor_url_modal_new_option_label: { message: 'New window' },
    skyux_text_editor_url_modal_email_label: { message: 'Email address' },
    skyux_text_editor_url_modal_subject_label: { message: 'Subject line' },
    skyux_text_editor_url_modal_save_button_label: { message: 'Save' },
    skyux_text_editor_url_modal_cancel_button_label: { message: 'Cancel' },
  },
};

export class SkyTextEditorResourcesProvider implements SkyLibResourcesProvider {
  public getString(localeInfo: SkyAppLocaleInfo, name: string): string {
    return getLibStringForLocale(RESOURCES, localeInfo.locale, name);
  }
}

/**
 * Import into any component library module that needs to use resource strings.
 */
@NgModule({
  exports: [SkyI18nModule],
  providers: [
    {
      provide: SKY_LIB_RESOURCES_PROVIDERS,
      useClass: SkyTextEditorResourcesProvider,
      multi: true,
    },
  ],
})
export class SkyTextEditorResourcesModule {}
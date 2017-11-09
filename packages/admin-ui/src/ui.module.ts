import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { FileUploadModule } from 'ng2-file-upload'
import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { UiFormlyModule } from './modules/formly/formly.module'

import { UiButtonsModule } from './components/buttons/buttons.module'
import { UiCardModule } from './components/card/card.module'
import { UiDataGridModule } from './components/data-grid/data-grid.module'
import { UiModalModule } from './components/modal/modal.module'
import { UiTagModule } from './components/tag/tag.module'

import { UiDashboardIconComponent } from './components/dashboard-icon/dashboard-icon.component'
import { UiFormComponent } from './components/form/ui-form.component'
import { UiLogoComponent } from './components/logo/logo.component'
import { UiMessageComponent } from './components/message/message.component'
import { UiPageComponent } from './components/page/page.component'
import { UiTableComponent } from './components/table/ui-table.component'
import { UiTabsComponent } from './components/tabs/tabs.component'
import { UiTabsVerticalComponent } from './components/tabs/tabs-vertical.component'
import { UiTemplatesComponent } from './components/templates/templates.component'
import { UiUploaderComponent } from './components/uploader/ui-uploader.component'

import { UiService } from './services/ui.service'
import { FormService } from './services/form.service'

/**
 * Exported Modules
 * @type { Array }
 */
const modules = [
  NgxAlertsModule,
  UiButtonsModule,
  UiCardModule,
  UiDataGridModule,
  UiModalModule,
  UiTagModule,
  FileUploadModule,
  UiFormlyModule,
]

/**
 * Exported Components
 * @type { Array }
 */
const components = [
  UiDashboardIconComponent,
  UiFormComponent,
  UiLogoComponent,
  UiMessageComponent,
  UiPageComponent,
  UiTableComponent,
  UiTabsComponent,
  UiTabsVerticalComponent,
  UiTemplatesComponent,
  UiUploaderComponent,
]

/**
 * Exported Providers
 * @type { Array }
 */
const providers = [FormService, UiService]

/**
 * Exported Declarations
 * @type { Array }
 */
const declarations = []

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    NgxAlertsModule.forRoot(),
    ...modules,
  ],
  declarations: [...declarations, ...components],
  exports: [CommonModule, BsDropdownModule, ...declarations, ...modules, ...components],
})
export class ColmenaUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ColmenaUiModule,
      providers: [...providers],
    }
  }
}

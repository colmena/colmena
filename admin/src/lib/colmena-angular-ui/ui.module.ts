import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly'

import { ToastyService, ToastyModule } from 'ng2-toasty'

import { UiButtonsModule } from './components/buttons/buttons.module'
import { UiCardModule } from './components/card/card.module'
import { UiDataGridModule } from './components/data-grid/data-grid.module'
import { UiModalModule } from './components/modal/modal.module'
import { UiTagModule } from './components/tag/tag.module'

import { UiDashboardIconComponent } from './components/dashboard-icon/dashboard-icon.component'
import { UiFormComponent } from './components/form/ui-form.component'
import { UiLogoComponent } from './components/logo/logo.component'
import { UiMessageComponent } from './components/message/message.component'
import { UiTableComponent } from './components/table/ui-table.component'


import { UiService } from './services/ui.service'
import { UiTemplatesComponent } from './components/templates/templates.component'

/**
 * Exported Modules
 * @type { Array }
 */
const modules = [
  UiButtonsModule,
  UiCardModule,
  UiDataGridModule,
  UiModalModule,
  UiTagModule,
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
  UiTableComponent,
  UiTemplatesComponent,
]

/**
 * Exported Providers
 * @type { Array }
 */
const providers = [
  UiService,
  ToastyService,
]

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
    ToastyModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    ...modules,
  ],
  declarations: [
    ...declarations,
    ...components,
  ],
  providers: [
    ...providers
  ],
  exports: [
    FormlyModule,
    ...declarations,
    ...modules,
    ...components,
  ],
})
export class ColmenaUiModule {
}

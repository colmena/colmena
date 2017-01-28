import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ToastyService, ToastyModule } from 'ng2-toasty'

import { UiButtonsModule } from './components/buttons/buttons.module'
import { UiCardModule } from './components/card/card.module'
import { UiDataGridModule } from './components/data-grid/data-grid.module'
import { UiFormModule } from './components/form/form.module'
import { UiModalModule } from './components/modal/modal.module'
import { UiTagModule } from './components/tag/tag.module'

import { UiCrudDetailsComponent } from './components/crud-details/ui-crud-details.component'
import { UiCrudFormComponent } from './components/crud-form/ui-crud-form.component'
import { UiCrudListComponent } from './components/crud-list/ui-crud-list.component'
import { UiFormComponent } from './components/form/ui-form.component'
import { UiLogoComponent } from './components/logo/logo.component'
import { UiMessageComponent } from './components/message/message.component'
import { UiTableComponent } from './components/table/ui-table.component'


import { UiService } from './services/ui.service'

/**
 * Exported Modules
 * @type { Array }
 */
const modules = [
  UiButtonsModule,
  UiCardModule,
  UiDataGridModule,
  UiFormModule,
  UiModalModule,
  UiTagModule,
]

/**
 * Exported Components
 * @type { Array }
 */
const components = [
  UiCrudDetailsComponent,
  UiCrudFormComponent,
  UiCrudListComponent,
  UiFormComponent,
  UiLogoComponent,
  UiMessageComponent,
  UiTableComponent,
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
    RouterModule,
    ToastyModule.forRoot(),
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
    ...declarations,
    ...modules,
    ...components,
  ],
})
export class ColmenaUiModule {
}

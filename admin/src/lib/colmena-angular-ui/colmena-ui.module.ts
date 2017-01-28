import { NgModule } from '@angular/core'

import { UiButtonsModule } from './components/buttons/buttons.module'
import { UiCardModule } from './components/card/card.module'
import { UiDataGridModule } from './components/data-grid/data-grid.module'
import { UiFormModule } from './components/form/form.module'
import { UiModalModule } from './components/modal/modal.module'
import { UiTagModule } from './components/tag/tag.module'

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
 * Exported Providers
 * @type { Array }
 */
const providers = []


/**
 * Exported Declarations
 * @type { Array }
 */
const declarations = []


@NgModule({
  declarations: [
    ...declarations
  ],
  providers: [
    ...providers
  ],
  exports: [
    ...declarations,
    ...modules,
  ],
  imports: [
    ...modules,
  ],
})
export class ColmenaUiModule {
}

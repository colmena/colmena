import { NgModule } from '@angular/core'

import { FcButtonsModule } from './components/fc-buttons/fc-buttons.module'
import { FcCardModule } from './components/fc-card/fc-card.module'
import { FcFormModule } from './components/fc-form/fc-form.module'
import { FcTableModule } from './components/fc-table/fc-table.module'
import { FcTagModule } from './components/fc-tag/fc-tag.module'

/**
 * Exported Modules
 * @type { Array }
 */
const modules = [
  FcButtonsModule,
  FcCardModule,
  FcFormModule,
  FcTableModule,
  FcTagModule,
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
    ...declarations,
  ],
  providers: [
    ...providers,
  ],
  exports: [
    ...declarations,
    ...modules,
  ],
  imports: [
    ...modules,
  ],
})
export class FcUiModule {
}

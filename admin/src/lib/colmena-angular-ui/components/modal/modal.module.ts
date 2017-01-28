import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiModalComponent } from './modal.component'
import { ModalModule } from 'ng2-bootstrap/modal'

@NgModule({
  declarations: [ UiModalComponent ],
  exports: [ UiModalComponent ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class UiModalModule {
}

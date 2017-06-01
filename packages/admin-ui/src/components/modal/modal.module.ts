import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ModalModule } from 'ngx-bootstrap/modal'

import { UiModalComponent } from './modal.component'
import { UiModalFormComponent  } from './modal-form.component'

@NgModule({
  declarations: [
    UiModalComponent,
    UiModalFormComponent,
  ],
  exports: [
    UiModalComponent,
    UiModalFormComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class UiModalModule {
}

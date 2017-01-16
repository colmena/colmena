import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FcModalComponent } from './fc-modal.component'
import { ModalModule } from 'ng2-bootstrap/modal'

@NgModule({
  declarations: [ FcModalComponent ],
  exports: [ FcModalComponent ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class FcModalModule {
}

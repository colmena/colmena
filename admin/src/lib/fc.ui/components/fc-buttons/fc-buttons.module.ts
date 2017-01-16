import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { DropdownModule } from 'ng2-bootstrap/dropdown'

import { FcButtonsComponent } from './fc-buttons.component'

@NgModule({
  declarations: [
    FcButtonsComponent,
  ],
  exports: [
    FcButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule.forRoot(),
  ]
})
export class FcButtonsModule {
}

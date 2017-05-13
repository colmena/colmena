import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { DropdownModule } from 'ng2-bootstrap/dropdown'

import { UiButtonsComponent } from './buttons.component'

@NgModule({
  declarations: [
    UiButtonsComponent,
  ],
  exports: [
    UiButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule.forRoot(),
  ]
})
export class UiButtonsModule {
}

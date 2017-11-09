import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { BsDropdownModule } from 'ngx-bootstrap'

import { UiButtonsComponent } from './buttons.component'

@NgModule({
  declarations: [UiButtonsComponent],
  exports: [UiButtonsComponent],
  imports: [CommonModule, FormsModule, BsDropdownModule.forRoot()],
})
export class UiButtonsModule {}

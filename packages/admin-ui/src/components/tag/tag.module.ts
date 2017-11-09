import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiTagComponent } from './tag.component'

@NgModule({
  declarations: [UiTagComponent],
  exports: [UiTagComponent],
  imports: [CommonModule],
})
export class UiTagModule {}

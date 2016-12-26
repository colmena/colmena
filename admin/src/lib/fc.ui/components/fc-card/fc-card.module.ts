import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FcCardComponent } from './fc-card.component'
import { FcCardContentComponent } from './fc-card-content.component'
import { FcCardFooterComponent } from './fc-card-footer.component'
import { FcCardHeaderComponent } from './fc-card-header.component'

const modules = [
  FcCardComponent,
  FcCardContentComponent,
  FcCardFooterComponent,
  FcCardHeaderComponent,
]

@NgModule({
  declarations: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  imports: [
    CommonModule,
  ]
})
export class FcCardModule {
}

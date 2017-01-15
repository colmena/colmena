import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FcCardComponent, FcCardContentComponent, FcCardFooterComponent, FcCardHeaderComponent
} from './fc-card.component'

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
  imports: [ CommonModule ]
})
export class FcCardModule {
}

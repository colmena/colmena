import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiCardComponent, UiCardContentComponent, UiCardFooterComponent, UiCardHeaderComponent } from './card.component'

const modules = [UiCardComponent, UiCardContentComponent, UiCardFooterComponent, UiCardHeaderComponent]

@NgModule({
  declarations: [...modules],
  exports: [...modules],
  imports: [CommonModule],
})
export class UiCardModule {}

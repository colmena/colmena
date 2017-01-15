import { NgModule } from '@angular/core'
import { FcCodeViewerComponent } from './fc-code-viewer.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ FcCodeViewerComponent ],
  exports: [ FcCodeViewerComponent ],
  imports: [ CommonModule ]
})
export class FcCodeViewerModule {
}

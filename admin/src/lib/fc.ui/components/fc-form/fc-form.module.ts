import { NgModule } from '@angular/core'
import { FcFormComponent } from './fc-form.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ FcFormComponent ],
  exports: [ FcFormComponent ],
  imports: [ CommonModule ]
})
export class FcFormModule {
}

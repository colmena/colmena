import { NgModule } from '@angular/core'
import { UiFormComponent } from './form.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ UiFormComponent ],
  exports: [ UiFormComponent ],
  imports: [ CommonModule ]
})
export class UiFormModule {
}

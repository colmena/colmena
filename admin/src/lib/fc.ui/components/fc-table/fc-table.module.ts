import { NgModule } from '@angular/core'
import { FcTableComponent } from './fc-table.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ FcTableComponent ],
  exports: [ FcTableComponent ],
  imports: [ CommonModule ]
})
export class FcTableModule {
}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { FcUiModule } from '../../lib/fc.ui/fc-ui.module'

import { DevAlertComponent } from './alert/alert.component'
import { DevIndexComponent } from './index/index.component'
import { DevToastComponent } from './toast/toast.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FcUiModule,
  ],
  declarations: [
    DevAlertComponent,
    DevIndexComponent,
    DevToastComponent,
  ]
})
export class DevModule {
}

import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app.shared.module'

import { DevAlertComponent } from './alert/alert.component'
import { DevIndexComponent } from './index/index.component'
import { DevToastComponent } from './toast/toast.component'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    DevAlertComponent,
    DevIndexComponent,
    DevToastComponent,
  ],
})
export class DevModule {}

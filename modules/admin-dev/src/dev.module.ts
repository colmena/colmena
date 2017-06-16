import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { DevAlertComponent } from './alert/alert.component'
import { DevIndexComponent } from './index/index.component'
import { DevToastComponent } from './toast/toast.component'

import { DevRoutingModule } from './dev-routing.module'

import { HasDevAccess } from './dev.guards'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,

    DevRoutingModule,
  ],
  declarations: [
    DevAlertComponent,
    DevIndexComponent,
    DevToastComponent,
  ],
  providers: [
    HasDevAccess,
  ]
})
export class DevModule {}

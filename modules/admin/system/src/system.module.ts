import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { SystemDashboardComponent } from './system.component'

import { SystemRoutingModule } from './system-routing.module'
import { HasSystemAccess } from './system.guards'

@NgModule({
  imports: [
    ColmenaUiModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemDashboardComponent,
  ],
  providers: [
    HasSystemAccess,
  ],
  exports: [
    SystemDashboardComponent,
  ],
})
export class SystemModule { }

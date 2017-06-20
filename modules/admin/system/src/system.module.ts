import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { SystemDashboardComponent } from './system.component'
import { SystemInfoComponent } from './system-info.component'
import { SystemModulesComponent } from './system-modules.component'

import { SystemRoutingModule } from './system-routing.module'
import { HasSystemAccess } from './system.guards'

@NgModule({
  imports: [
    ColmenaUiModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemDashboardComponent,
    SystemInfoComponent,
    SystemModulesComponent,
  ],
  providers: [
    HasSystemAccess,
  ],
  exports: [
    SystemDashboardComponent,
  ],
})
export class SystemModule { }

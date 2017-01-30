import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app.shared.module'
import { DomainsModule } from './domains/domains.module'
import { SettingsModule } from './settings/settings.module'
import { UsersModule } from './users/users.module'

import { SystemDashboardComponent } from './system.component'

@NgModule({
  imports: [
    AppSharedModule,
    DomainsModule,
    SettingsModule,
    UsersModule,
  ],
  declarations: [
    SystemDashboardComponent,
  ],
  exports: [
    SystemDashboardComponent,
  ],
})
export class SystemModule { }

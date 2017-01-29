import { NgModule } from '@angular/core'

import { DomainsModule } from './domains/domains.module'
import { SettingsModule } from './settings/settings.module'
import { UsersModule } from './users/users.module'

@NgModule({
  imports: [
    DomainsModule,
    SettingsModule,
    UsersModule,
  ]
})
export class SystemModule { }

import { NgModule } from '@angular/core'

import { AuthConfigModule } from '@colmena/module-admin-auth'
import { ContentConfigModule } from '@colmena/module-admin-content'
import { CoreConfigModule } from '@colmena/module-admin-core'
import { DashboardConfigModule } from '@colmena/module-admin-dashboard'
import { DataBrowserConfigModule } from '@colmena/module-admin-data-browser'
import { DevConfigModule } from '@colmena/module-admin-dev'
import { StorageConfigModule } from '@colmena/module-admin-storage'
import { SystemConfigModule } from '@colmena/module-admin-system'

@NgModule({
  imports: [
    AuthConfigModule,
    ContentConfigModule,
    CoreConfigModule,
    DashboardConfigModule,
    DataBrowserConfigModule,
    DevConfigModule,
    StorageConfigModule,
    SystemConfigModule,
  ],
})
export class AppConfigModule {}

import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { DashboardRoutingModule } from './dashboard-routing.module'

import { ContentModule } from '@colmena/module-admin-content'
import { SystemModule } from '@colmena/module-admin-system'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { PasswordComponent } from './components/password.component'
import { ProfileComponent } from './components/profile.component'

@NgModule({
  imports: [
    ColmenaUiModule,
    DashboardRoutingModule,
    ContentModule,
    SystemModule,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    IndexComponent,
    PasswordComponent,
    ProfileComponent,
  ],
})
export class DashboardModule { }

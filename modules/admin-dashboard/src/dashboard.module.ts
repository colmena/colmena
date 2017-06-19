import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { ContentModule } from '@colmena/module-admin-content'
import { SystemModule } from '@colmena/module-admin-system'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { PasswordComponent } from './components/password.component'
import { ProfileComponent } from './components/profile.component'

import { DashboardRoutingModule } from './dashboard-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,

    ColmenaUiModule,
    ContentModule,
    SystemModule,

    DashboardRoutingModule,
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

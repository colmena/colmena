import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { ContentModule } from '@colmena/module-admin-content'
import { SystemModule } from '@colmena/module-admin-system'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PasswordComponent } from './password/password.component'
import { ProfileComponent } from './profile/profile.component'

import { DashboardRoutingModule } from './dashboard-routing.module'

const components = [
  AboutComponent,
  DashboardComponent,
  PasswordComponent,
  ProfileComponent,
]

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
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class DashboardModule { }

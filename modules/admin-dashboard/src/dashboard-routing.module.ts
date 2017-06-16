import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PasswordComponent } from './password/password.component'
import { ProfileComponent } from './profile/profile.component'

export const routes: Routes = [ {
  path: '',
  data: {
    title: 'Dashboard',
  },
  children: [
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'profile', component: ProfileComponent },
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

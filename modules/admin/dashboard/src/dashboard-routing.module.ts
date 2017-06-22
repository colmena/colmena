import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'
import { PasswordComponent } from './components/password.component'
import { ProfileComponent } from './components/profile.component'

const routes: Routes = [ {
  path: '',
  data: {
    title: 'Dashboard',
  },
  children: [
    { path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'profile', component: ProfileComponent },
    ]}
  ]
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

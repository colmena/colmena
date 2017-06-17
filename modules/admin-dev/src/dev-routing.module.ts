import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HasDevAccess } from './dev.guards'

import { IndexComponent } from './containers/index.component'

import { AlertComponent } from './components/alert.component'
import { DashboardComponent } from './components/dashboard.component'
import { FormsComponent } from './components/forms.component'
import { ToastComponent } from './components/toast.component'

export const routes: Routes = [ {
  path: 'development',
  data: {
    title: 'Development',
  },
  canActivate: [HasDevAccess],
  children: [
    { path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'alerts', component: AlertComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'toasts', component: ToastComponent },
    ] },
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }

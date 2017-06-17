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
  canActivate: [HasDevAccess],
  children: [
    {
      path: '',
      component: IndexComponent,
      data: {
        title: 'Development',
      },
      children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'alerts',
        component: AlertComponent,
        data: { title: 'Alerts' }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: { title: 'Forms' }
      },
      {
        path: 'toasts',
        component: ToastComponent,
        data: { title: 'Toasts' }
      },
    ] },
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }

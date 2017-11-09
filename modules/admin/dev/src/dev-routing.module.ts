import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HasDevAccess } from './dev.guards'

import { AlertComponent } from './components/alert.component'
import { DashboardComponent } from './components/dashboard.component'
import { FormsComponent } from './components/forms.component'
import { IndexComponent } from './components/index.component'
import { NotifyComponent } from './components/notifications.component'

export const routes: Routes = [
  {
    path: '',
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
            data: { title: 'Alerts' },
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
            data: { title: 'Dashboard' },
          },
          {
            path: 'forms',
            component: FormsComponent,
            data: { title: 'Forms' },
          },
          {
            path: 'notifications',
            component: NotifyComponent,
            data: { title: 'Notifications' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevRoutingModule {}

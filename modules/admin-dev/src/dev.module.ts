import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { HasDevAccess } from './dev.guards'

import { DevRoutingModule } from './dev-routing.module'

import { ColmenaModule } from './colmena/colmena.module'

import { IndexComponent } from './containers/index.component'

import { AlertComponent } from './components/alert.component'
import { DashboardComponent } from './components/dashboard.component'
import { ToastComponent } from './components/toast.component'
import { FormsComponent } from './components/forms.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,

    DevRoutingModule,

    ColmenaModule,
  ],
  declarations: [
    IndexComponent,

    AlertComponent,
    DashboardComponent,
    FormsComponent,
    ToastComponent,
  ],
  providers: [
    HasDevAccess,
  ]
})
export class DevModule {

  public static navLinks = [
    { icon: 'icon-note', title: 'Forms', link: 'forms', type: 'warning' },
    { icon: 'icon-info', title: 'Alerts', link: 'alerts', type: 'danger' },
    { icon: 'icon-bubble', title: 'Toasts', link: 'toasts', type: 'success' },
    { icon: 'fa fa-cube', title: 'Colmena', link: 'colmena', type: 'primary' },
  ]
}

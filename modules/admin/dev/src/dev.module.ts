import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { DevRoutingModule } from './dev-routing.module'

import { HasDevAccess } from './dev.guards'

import { AlertComponent } from './components/alert.component'
import { DashboardComponent } from './components/dashboard.component'
import { FormsComponent } from './components/forms.component'
import { IndexComponent } from './components/index.component'
import { NotifyComponent } from './components/notifications.component'

@NgModule({
  imports: [FormsModule, ColmenaUiModule, DevRoutingModule],
  declarations: [AlertComponent, DashboardComponent, FormsComponent, IndexComponent, NotifyComponent],
  providers: [HasDevAccess],
})
export class DevModule {}

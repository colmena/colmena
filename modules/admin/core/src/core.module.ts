import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { CoreRoutingModule } from './core-routing.module'
import { CoreService } from './core.service'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'

@NgModule({
  imports: [
    CommonModule,
    ColmenaUiModule,
    CoreRoutingModule,
  ],
  providers: [
    CoreService,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    IndexComponent,
  ],
})
export class CoreModule { }

import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { CoreRoutingModule } from './core-routing.module'
import { CoreService } from './core.service'

import { IndexComponent } from './components/index.component'
import { InfoComponent } from './components/info.component'

@NgModule({
  imports: [
    ColmenaUiModule,
    CoreRoutingModule,
  ],
  providers: [
    CoreService,
  ],
  declarations: [
    IndexComponent,
    InfoComponent,
  ],
})
export class CoreModule { }

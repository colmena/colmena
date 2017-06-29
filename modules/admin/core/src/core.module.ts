import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { CoreRoutingModule } from './core-routing.module'
import { CoreService } from './core.service'

import { IndexComponent } from './components/index.component'
import { InfoComponent } from './components/info.component'
import { AdminModulesComponent } from './components/admin-modules.component'
import { ModulesComponent } from './components/api-modules.component'
import { ModulesModelsComponent } from './components/api-modules-models.component'
import { ModulesSampleDataComponent } from './components/api-modules-sample-data.component'
import { DatasourcesComponent } from './components/datasource.component'

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
    AdminModulesComponent,
    DatasourcesComponent,
    ModulesComponent,
    ModulesModelsComponent,
    ModulesSampleDataComponent,

  ],
})
export class CoreModule { }

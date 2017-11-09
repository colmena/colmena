import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { ModulesRoutingModule } from './modules-routing.module'

import { ModulesService } from './modules.service'

import { AdminModulesComponent } from './components/admin-modules.component'
import { ModulesComponent } from './components/modules.component'
import { ModulesModelsComponent } from './components/modules-models.component'
import { ModulesSampleDataComponent } from './components/modules-sample-data.component'

@NgModule({
  imports: [ColmenaUiModule, ModulesRoutingModule],
  declarations: [AdminModulesComponent, ModulesComponent, ModulesModelsComponent, ModulesSampleDataComponent],
  providers: [ModulesService],
})
export class ModulesModule {}

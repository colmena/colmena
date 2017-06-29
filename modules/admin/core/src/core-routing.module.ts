import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './components/index.component'
import { InfoComponent } from './components/info.component'
import { ModulesComponent } from './components/api-modules.component'
import { AdminModulesComponent } from './components/admin-modules.component'
import { DatasourcesComponent } from './components/datasource.component'

const routes: Routes = [ {
  path: '',
  data: {
    title: 'Core',
  },
  children: [
    { path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: InfoComponent },
      { path: 'datasources', component: DatasourcesComponent },
      // { path: 'ping', component: PingComponent },
      {
        path: 'api',
        component: ModulesComponent,
        data: { title: 'API Modules' }
      },
      {
        path: 'admin',
        component: AdminModulesComponent,
        data: { title: 'Admin Modules' }
      },

    ]}
  ]
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

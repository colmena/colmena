import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AdminModulesComponent } from './components/admin-modules.component'
import { ModulesComponent } from './components/modules.component'

export const ColmenaRoutes: Routes = [ {
  path: '',
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
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
  ],
} ]

@NgModule({
  imports: [ RouterModule.forChild(ColmenaRoutes) ],
  exports: [ RouterModule ]
})
export class ModulesRoutingModule {}


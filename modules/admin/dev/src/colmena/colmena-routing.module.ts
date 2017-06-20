import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DataComponent } from './components/data.component'
import { DashboardComponent } from './components/dashboard.component'
import { DetailComponent } from './components/detail.component'
import { IndexComponent } from './components/index.component'
import { ModulesComponent } from './components/modules.component'

export const ColmenaRoutes: Routes = [ {
  path: 'colmena',
  children: [
    {
      path: '',
      component: IndexComponent,
      data: {
        title: 'Colmena',
      },
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {
          path: 'dashboard',
          component: DashboardComponent,
          data: { title: 'Dashboard' }
        },
        {
          path: 'data',
          component: DataComponent,
          data: { title: 'Details' }
        },
        {
          path: 'modules',
          component: ModulesComponent,
          data: { title: 'Modules' }
        },
        {
          path: ':id',
          component: DetailComponent,
          data: { title: 'Details' }
        },
      ]
    },
  ],
} ]

@NgModule({
  imports: [ RouterModule.forChild(ColmenaRoutes) ],
  exports: [ RouterModule ]
})
export class DevRoutingModule {}


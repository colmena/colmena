import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DevIndexComponent } from './dev/index/index.component'

import { AboutComponent } from './system/about/about.component'
import { DashboardComponent } from './system/dashboard/dashboard.component'

export const appRoutes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'development',
        component: DevIndexComponent
      }, {
        path: 'development',
        component: DevIndexComponent
      },
    ]
  }, {
    path: '**',
    redirectTo: '',
  }
], { enableTracing: true })

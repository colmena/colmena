import { Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { AboutComponent } from './about/about.component'
import { NotFoundComponent } from '../core/not-found/not-found.component'

export const DashboardModuleRoutes: Routes = [ {
  path: '',
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'not-found', component: NotFoundComponent },
  ],
} ]


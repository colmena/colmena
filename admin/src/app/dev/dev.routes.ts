import { Routes } from '@angular/router'
import { DevIndexComponent } from './index/index.component'

export const DevRoutes: Routes = [ {
  path: 'development',
  data: {
    title: 'Development',
  },
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DevIndexComponent },
  ],
} ]

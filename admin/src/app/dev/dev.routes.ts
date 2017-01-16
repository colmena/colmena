import { Routes } from '@angular/router'
import { DevIndexComponent } from './index/index.component'

export const DevRoutes: Routes = [ {
  path: 'dev',
  data: {
    title: 'Development',
  },
  children: [
    {
      path: 'index',
      component: DevIndexComponent
    },
  ],
} ]

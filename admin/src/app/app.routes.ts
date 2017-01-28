import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/colmena-angular-layout'
import { SimpleLayoutComponent } from '@colmena/colmena-angular-layout'

import { AuthRoutes } from '@colmena/colmena-angular-auth'
import { ContentRoutes } from './content/content.routes'
import { DevRoutes } from './dev/dev.routes'
import { SystemRoutes } from './system/system.routes'

const routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      ...AuthRoutes,
    ]
  }, {
    path: '',
    component: FullLayoutComponent,
    children: [
      ...ContentRoutes,
      ...DevRoutes,
      ...SystemRoutes,
    ]
  },
  { path: '**', redirectTo: 'not-found' }
]

// Set enableTracing to true to debug routing
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false })

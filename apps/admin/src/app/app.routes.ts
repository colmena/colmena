import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/colmena-angular-layout'
import { SimpleLayoutComponent } from '@colmena/colmena-angular-layout'

import { AuthRoutes } from '@colmena/colmena-angular-auth'
import { ContentModuleRoutes } from './content/content.routes'
import { DevModuleRoutes } from './dev/dev.routes'
import { SystemModuleRoutes } from './system/system.routes'
import { CoreModuleRoutes } from './core/core.routes'
import { DashboardModuleRoutes } from './dashboard/dashboard.routes'

const simpleRoutes = [
  ...CoreModuleRoutes,
  ...AuthRoutes,
]

const fullRoutes = [
  ...ContentModuleRoutes,
  ...DashboardModuleRoutes,
  ...DevModuleRoutes,
  ...SystemModuleRoutes,
]

const routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  { path: '', component: SimpleLayoutComponent, children: simpleRoutes },
  { path: '', component: FullLayoutComponent, children: fullRoutes },
  { path: '**', redirectTo: 'not-found' }
]

// Set enableTracing to true to debug routing
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false })

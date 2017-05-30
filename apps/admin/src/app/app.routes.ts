import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/admin-layout'
import { SimpleLayoutComponent } from '@colmena/admin-layout'

import { AuthRoutes } from '@colmena/admin-auth'
import { ContentModuleRoutes } from '@colmena/module-admin-content'
import { DevModuleRoutes } from './dev/dev.routes'
import { SystemModuleRoutes } from '@colmena/module-admin-system'
import { CoreModuleRoutes } from './core/core.routes'
import { DashboardModuleRoutes } from './dashboard/dashboard.routes'
import { HasContentAccess } from './app.guards'
import { DomainResolver } from './app.resolvers'

const simpleRoutes = [
  ...CoreModuleRoutes,
  ...AuthRoutes,
]

const contentRoute = {
  path: 'content',
  canActivate: [ HasContentAccess ],
  resolve: { domain: DomainResolver },
  children: ContentModuleRoutes,
}

const fullRoutes = [
  contentRoute,
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

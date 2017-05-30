import { ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/admin-layout'
import { SimpleLayoutComponent } from '@colmena/admin-layout'

import { AuthRoutes } from '@colmena/admin-auth'
import { ContentModuleRoutes } from '@colmena/module-admin-content'
import { CoreModuleRoutes } from '@colmena/module-admin-core'
import { DashboardModuleRoutes } from '@colmena/module-admin-dashboard'
import { SystemModuleRoutes } from '@colmena/module-admin-system'

import { DevModuleRoutes } from './dev/dev.routes'
import { HasContentAccess } from './app.guards'
import { DomainResolver } from './app.resolvers'

const simpleRoutes = [
  { path: '', children: CoreModuleRoutes },
  ...AuthRoutes,
]

const contentRoute = {
  path: 'content',
  canActivate: [ HasContentAccess ],
  resolve: { domain: DomainResolver },
  children: ContentModuleRoutes,
}

const dashboardRoute = {
  path: '',
  canActivate: [ HasContentAccess ],
  resolve: { domain: DomainResolver },
  children: DashboardModuleRoutes,
}

const fullRoutes = [
  contentRoute,
  dashboardRoute,
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

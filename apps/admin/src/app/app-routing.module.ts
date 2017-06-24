import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { FullLayoutComponent } from '@colmena/admin-layout'
import { SimpleLayoutComponent } from '@colmena/admin-layout'

import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterComponent } from './components/router/router.component'

const routes: Routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '', component: SimpleLayoutComponent, children: [
    { path: '', loadChildren: '@colmena/module-admin-auth#AuthModule' },
    { path: 'router', component: RouterComponent },
    { path: 'not-found', component: NotFoundComponent },
  ]
  }, {
    path: '', component: FullLayoutComponent, children: [
      { path: '', loadChildren: './extensions-routing.module#ExtensionsRoutingModule' },
      { path: 'content', loadChildren: '@colmena/module-admin-content#ContentModule' },
      { path: 'core', loadChildren: '@colmena/module-admin-core#CoreModule' },
      { path: 'dashboard', loadChildren: '@colmena/module-admin-dashboard#DashboardModule' },
      { path: 'browser', loadChildren: '@colmena/module-admin-data-browser#DataBrowserModule' },
      { path: 'development', loadChildren: '@colmena/module-admin-dev#DevModule' },
      { path: 'storage', loadChildren: '@colmena/module-admin-storage#StorageModule' },
      { path: 'system', loadChildren: '@colmena/module-admin-system#SystemModule' },
    ]
  },
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

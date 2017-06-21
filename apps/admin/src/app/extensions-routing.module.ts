import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
// { path: '', loadChildren: '@colmena/module-admin-starter#StarterModule' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensionsRoutingModule { }

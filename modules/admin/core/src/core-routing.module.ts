import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './components/about.component'
import { DashboardComponent } from './components/dashboard.component'
import { IndexComponent } from './components/index.component'

const routes: Routes = [ {
  path: '',
  data: {
    title: 'Core',
  },
  children: [
    { path: '', component: IndexComponent, children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'about', component: AboutComponent, data: { title: 'About' } },
    ]}
  ]
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

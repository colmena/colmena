import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DevIndexComponent } from './index/index.component'

export const routes: Routes = [ {
  path: 'development',
  data: {
    title: 'Development',
  },
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DevIndexComponent },
  ],
} ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }

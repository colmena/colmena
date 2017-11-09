import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './components/index.component'
import { InfoComponent } from './components/info.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Core',
    },
    children: [
      {
        path: '',
        component: IndexComponent,
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: InfoComponent },
          { path: 'modules', loadChildren: './modules/modules.module#ModulesModule' },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}

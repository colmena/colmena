import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PageDetailComponent } from './components/page-detail.component'
import { PageFormComponent } from './components/page-form.component'
import { PageListComponent } from './components/page-list.component'

import { PagesResolver } from './pages.resolvers'

const routes: Routes = [
  {
    path: 'pages',
    data: { title: 'Pages' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: PageListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: PageDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: PageFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: PageDetailComponent,
        resolve: {
          page: PagesResolver,
        },
        data: { title: 'page' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: PageFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

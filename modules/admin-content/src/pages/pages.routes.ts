import { Routes } from '@angular/router'

import { PageListComponent } from './containers/page-list.component'
import { PageDetailComponent } from './containers/page-detail.component'
import { PageFormComponent } from './components/page-form.component'

import { PagesResolver } from './pages.resolvers'

export const PagesRoutes: Routes = [
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

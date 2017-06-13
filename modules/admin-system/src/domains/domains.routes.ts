import { Routes } from '@angular/router'

import { DomainListComponent } from './containers/domain-list.component'
import { DomainDetailComponent } from './containers/domain-detail.component'
import { DomainFormComponent } from './components/domain-form.component'

import { SystemDomainResolver } from './domains.resolvers'

export const SystemDomainsRoutes: Routes = [
  {
    path: 'domains',
    data: { title: 'Domains' },
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: DomainListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: DomainDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: DomainFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: DomainDetailComponent,
        resolve: {
          systemDomain: SystemDomainResolver,
        },
        data: { title: 'domain' },
        children: [
          {
            path: '',
            redirectTo: 'edit',
            pathMatch: 'full',
          },
          {
            path: 'edit',
            component: DomainFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]

import { Routes } from '@angular/router'

import { DomainFormComponent } from './domain-form.component'
import { DomainListComponent } from './domain-list.component'

export const SystemDomainsRoutes: Routes = [ {
  path: 'domains',
  data: {
    title: 'Domains'
  },
  children: [
    { path: '', component: DomainListComponent, data: { title: 'List' } },
    { path: 'add', component: DomainFormComponent, data: { title: 'Add' } },
    { path: 'edit/:id', component: DomainFormComponent, data: { title: 'Edit' } },
  ],
} ]

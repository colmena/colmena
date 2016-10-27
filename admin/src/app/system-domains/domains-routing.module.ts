import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {DomainDetailsComponent}   from './domain-details.component';
import {DomainFormComponent}      from './domain-form.component';
import {DomainListComponent}      from './domain-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Domains'
    },
    children: [
      { path: '', redirectTo: 'domains', pathMatch: 'full' },
      { path: 'domains', component: DomainListComponent, data: { title: 'List' } },
      { path: 'domains/add', component: DomainFormComponent, data: { title: 'Add' } },
      { path: 'domains/:id', component: DomainDetailsComponent, data: { title: 'Details' }  },
      { path: 'domains/:id/edit', component: DomainFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule {
}

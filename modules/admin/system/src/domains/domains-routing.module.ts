import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DomainResolver } from './domains.resolvers'

import { DomainListComponent } from './components/domain-list.component'
import { DomainDetailComponent } from './components/domain-detail.component'
import { DomainFormComponent } from './components/domain-form.component'
import { DomainSettingsComponent } from './components/domain-settings.component'

export const SystemDomainsRoutes: Routes = [
  {
    path: '',
    data: { title: 'Domains' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
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
          systemDomain: DomainResolver,
        },
        data: { title: 'domain' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: DomainFormComponent,
            data: { title: 'Edit' },
          },
          {
            path: 'settings',
            component: DomainSettingsComponent,
            data: { title: 'Settings' },
          },
        ],
      },
    ],
  },
]
@NgModule({
  imports: [ RouterModule.forChild(SystemDomainsRoutes) ],
  exports: [ RouterModule ]
})
export class DomainsRoutingModule {}

import {NgModule}                 from '@angular/core';
import {Routes, RouterModule}     from '@angular/router';

import {DomainsComponent}         from './domains.component';

const routes: Routes = [{
  path: 'domains',
  component: DomainsComponent,
  data: {
    title: 'Domains'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule {
}

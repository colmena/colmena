import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {DashboardComponent}     from './dashboard.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  data: {
    title: 'Dashboard'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

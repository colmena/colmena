import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {DevComponent}           from './dev.component';

const routes: Routes = [{
  path: 'dev',
  component: DevComponent,
  data: {
    title: 'Dev'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule {
}

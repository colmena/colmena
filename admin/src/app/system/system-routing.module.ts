import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'System'
  },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}

import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Content'
  },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}

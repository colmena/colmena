import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {AuthorsComponent}       from './authors.component';

const routes: Routes = [{
  path: 'authors',
  component: AuthorsComponent,
  data: {
    title: 'Authors'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule {
}

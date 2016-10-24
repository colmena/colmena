import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {AuthorDetailsComponent}   from './author-details.component';
import {AuthorFormComponent}      from './author-form.component';
import {AuthorListComponent}      from './author-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authors'
    },
    children: [
      { path: '', redirectTo: 'authors', pathMatch: 'full' },
      { path: 'authors', component: AuthorListComponent, data: { title: 'List' } },
      { path: 'authors/add', component: AuthorFormComponent, data: { title: 'Add' } },
      { path: 'authors/:id', component: AuthorDetailsComponent, data: { title: 'Details' }  },
      { path: 'authors/:id/edit', component: AuthorFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule {
}

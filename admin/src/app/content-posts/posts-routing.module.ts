import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {PostDetailsComponent}   from './post-details.component';
import {PostFormComponent}      from './post-form.component';
import {PostListComponent}      from './post-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Posts'
    },
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostListComponent, data: { title: 'List' } },
      { path: 'posts/add', component: PostFormComponent, data: { title: 'Add' } },
      { path: 'posts/:id', component: PostDetailsComponent, data: { title: 'Details' }  },
      { path: 'posts/:id/edit', component: PostFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}

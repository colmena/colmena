import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PostDetailComponent } from './components/post-detail.component'
import { PostFormComponent } from './components/post-form.component'
import { PostListComponent } from './components/post-list.component'

import { PostsResolver } from './posts.resolvers'

const routes: Routes = [
  {
    path: '',
    data: { title: 'Posts' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: PostListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: PostDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: PostFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: PostDetailComponent,
        resolve: {
          post: PostsResolver,
        },
        data: { title: 'Post' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: PostFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}

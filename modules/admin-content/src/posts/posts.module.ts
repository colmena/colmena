import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { PostsRoutingModule } from './posts-routing.module'

import { PostComponent } from './components/post.component'
import { PostDetailComponent } from './components/post-detail.component'
import { PostFormComponent } from './components/post-form.component'
import { PostListComponent } from './components/post-list.component'

import { PostsService } from './posts.service'
import { PostsResolver } from './posts.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    PostsRoutingModule,
  ],
  declarations: [
    PostComponent,
    PostDetailComponent,
    PostFormComponent,
    PostListComponent,
  ],
  providers: [
    PostsService,
    PostsResolver,
  ],
})
export class PostsModule {}

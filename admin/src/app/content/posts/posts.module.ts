import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../app.shared.module'

import { PostFormComponent } from './post-form.component'
import { PostListComponent } from './post-list.component'

import { PostsService } from './posts.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    PostFormComponent,
    PostListComponent,
  ],
  providers: [
    PostsService,
  ],
})
export class PostsModule {}

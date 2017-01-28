import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

import { PostFormComponent } from './post-form.component'
import { PostListComponent } from './post-list.component'

import { PostsService } from './posts.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColmenaUiModule,
  ],
  declarations: [
    PostFormComponent,
    PostListComponent,
  ],
  providers: [
    PostsService,
  ],
})
export class PostsModule {
}

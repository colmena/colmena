import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {PostsRoutingModule}     from './posts-routing.module';

import {PostDetailsComponent}   from './post-details.component';
import {PostFormComponent}      from './post-form.component';
import {PostListComponent}      from './post-list.component';
import {UiModule}                 from '../ui/ui.module';
import {PostsService} from './posts.service';

@NgModule({
  imports: [
    PostsRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    PostDetailsComponent,
    PostFormComponent,
    PostListComponent,
  ],
  providers: [
    PostsService,
  ]
})
export class PostsModule {
}

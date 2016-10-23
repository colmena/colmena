import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {PostsComponent}          from './posts.component';

import {PostsRoutingModule}      from './posts-routing.module';

@NgModule({
  imports: [
    PostsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PostsComponent,
  ]
})
export class PostsModule {
}

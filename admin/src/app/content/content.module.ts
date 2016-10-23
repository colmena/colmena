import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {AuthorsModule}            from '../content-authors/authors.module';
import {EventsModule}             from '../content-events/events.module';
import {PostsModule}              from '../content-posts/posts.module';
import {ProductsModule}           from '../content-products/products.module';

import {ContentRoutingModule}  from './content-routing.module';

@NgModule({
  imports: [
    AuthorsModule,
    CommonModule,
    ContentRoutingModule,
    EventsModule,
    FormsModule,
    PostsModule,
    ProductsModule
  ]
})
export class ContentModule {
}

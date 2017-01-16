import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { EventsModule } from './events/events.module'
import { PostsModule } from './posts/posts.module'
import { ProductsModule } from './products/products.module'

@NgModule({
  imports: [
    CommonModule,
    EventsModule,
    FormsModule,
    PostsModule,
    ProductsModule,
  ],
})
export class ContentModule {
}

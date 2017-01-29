import { NgModule } from '@angular/core'

import { EventsModule } from './events/events.module'
import { PostsModule } from './posts/posts.module'
import { ProductsModule } from './products/products.module'

@NgModule({
  imports: [
    EventsModule,
    PostsModule,
    ProductsModule,
  ],
})
export class ContentModule {}

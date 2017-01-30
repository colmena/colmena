import { NgModule } from '@angular/core'

import { AppSharedModule } from '../app.shared.module'
import { EventsModule } from './events/events.module'
import { PostsModule } from './posts/posts.module'
import { ProductsModule } from './products/products.module'

import { ContentDashboardComponent } from './content.component'

@NgModule({
  imports: [
    AppSharedModule,
    EventsModule,
    PostsModule,
    ProductsModule,
  ],
  declarations: [
    ContentDashboardComponent,
  ],
  exports: [
    ContentDashboardComponent,
  ],
})
export class ContentModule {}

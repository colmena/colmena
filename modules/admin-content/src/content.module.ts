import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { Store } from '@ngrx/store'

import { ContentDashboardComponent } from './content.component'

import { PagesModule } from './pages/pages.module'

import { EventComponent } from './events/event.component'
import { EventsComponent } from './events/events.component'
import { FileComponent } from './files/file.component'
import { FilesComponent } from './files/files.component'
import { PostComponent } from './posts/post.component'
import { PostsComponent } from './posts/posts.component'
import { ProductComponent } from './products/product.component'
import { ProductsComponent } from './products/products.component'

import { EventsService } from './events/events.service'
import { FilesService } from './files/files.service'
import { PostsService } from './posts/posts.service'
import { ProductsService } from './products/products.service'

import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'

import { ContentRoutingModule } from './content-routing.module'

const components = [
  EventComponent,
  EventsComponent,
  FileComponent,
  FilesComponent,
  PostComponent,
  PostsComponent,
  ProductComponent,
  ProductsComponent,
]

const providers = [
  EventsService,
  FilesService,
  PostsService,
  ProductsService,

  HasContentAccess,
  DomainResolver,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,

    ColmenaUiModule,
    PagesModule,

    ContentRoutingModule,
  ],
  declarations: [ContentDashboardComponent, ...components],
  exports: [ContentDashboardComponent],
  providers: [...providers],
})
export class ContentModule {}

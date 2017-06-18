import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { ContentDashboardComponent } from './content.component'
import { PostsModule } from './posts/posts.module'
import { PagesModule } from './pages/pages.module'

import { EventComponent } from './events/event.component'
import { EventsComponent } from './events/events.component'
import { FileComponent } from './files/file.component'
import { FilesComponent } from './files/files.component'
import { ProductComponent } from './products/product.component'
import { ProductsComponent } from './products/products.component'

import { EventsService } from './events/events.service'
import { FilesService } from './files/files.service'
import { ProductsService } from './products/products.service'

import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'

import { ContentRoutingModule } from './content-routing.module'

const components = [
  EventComponent,
  EventsComponent,
  FileComponent,
  FilesComponent,
  ProductComponent,
  ProductsComponent,
]

const providers = [
  EventsService,
  FilesService,
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
    PostsModule,

    ContentRoutingModule,
  ],
  declarations: [ContentDashboardComponent, ...components],
  exports: [ContentDashboardComponent],
  providers: [...providers],
})
export class ContentModule { }

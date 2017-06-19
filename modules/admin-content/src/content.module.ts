import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/admin-ui'

import { ContentDashboardComponent } from './content.component'

import { FileComponent } from './files/file.component'
import { FilesComponent } from './files/files.component'
import { ProductComponent } from './products/product.component'
import { ProductsComponent } from './products/products.component'

import { FilesService } from './files/files.service'
import { ProductsService } from './products/products.service'

import { HasContentAccess } from './content.guards'
import { DomainResolver } from './content.resolvers'

import { ContentRoutingModule } from './content-routing.module'

const components = [
  FileComponent,
  FilesComponent,
  ProductComponent,
  ProductsComponent,
]

const providers = [
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

    ContentRoutingModule,
  ],
  declarations: [ContentDashboardComponent, ...components],
  exports: [ContentDashboardComponent],
  providers: [...providers],
})
export class ContentModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { ProductsRoutingModule } from './products-routing.module'

import { ProductComponent } from './components/product.component'
import { ProductDetailComponent } from './components/product-detail.component'
import { ProductFormComponent } from './components/product-form.component'
import { ProductListComponent } from './components/product-list.component'

import { ProductsService } from './products.service'
import { ProductsResolver } from './products.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}

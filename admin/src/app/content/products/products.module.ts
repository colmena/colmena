import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../app.shared.module'

import { ProductFormComponent } from './product-form.component'
import { ProductListComponent } from './product-list.component'

import { ProductsService } from './products.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent,
  ],
  providers: [
    ProductsService,
  ],
})
export class ProductsModule {}

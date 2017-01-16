import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { UiModule } from '../../ui/ui.module'

import { ProductFormComponent } from './product-form.component'
import { ProductListComponent } from './product-list.component'

import { ProductsService } from './products.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent,
  ],
  providers: [
    ProductsService,
  ],
})
export class ProductsModule {
}

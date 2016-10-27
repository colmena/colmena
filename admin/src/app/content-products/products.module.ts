import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {ProductsRoutingModule}     from './products-routing.module';

import {ProductDetailsComponent}   from './product-details.component';
import {ProductFormComponent}      from './product-form.component';
import {ProductListComponent}      from './product-list.component';
import {UiModule}                 from '../ui/ui.module';
import {ProductsService} from './products.service';

@NgModule({
  imports: [
    ProductsRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    ProductDetailsComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  providers: [
    ProductsService,
  ]
})
export class ProductsModule {
}

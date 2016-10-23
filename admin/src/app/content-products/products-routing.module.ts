import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {ProductsComponent}       from './products.component';

const routes: Routes = [{
  path: 'products',
  component: ProductsComponent,
  data: {
    title: 'Products'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}

import {NgModule}               from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';

import {ProductDetailsComponent}   from './product-details.component';
import {ProductFormComponent}      from './product-form.component';
import {ProductListComponent}      from './product-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Products'
    },
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent, data: { title: 'List' } },
      { path: 'products/add', component: ProductFormComponent, data: { title: 'Add' } },
      { path: 'products/:id', component: ProductDetailsComponent, data: { title: 'Details' }  },
      { path: 'products/:id/edit', component: ProductFormComponent, data: { title: 'Edit' }  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}

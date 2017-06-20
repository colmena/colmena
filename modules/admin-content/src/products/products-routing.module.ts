import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ProductDetailComponent } from './components/product-detail.component'
import { ProductFormComponent } from './components/product-form.component'
import { ProductListComponent } from './components/product-list.component'

import { ProductsResolver } from './products.resolvers'

const routes: Routes = [
  {
    path: 'products',
    data: { title: 'Products' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ProductListComponent,
        data: { title: 'List' },
      },
      {
        path: 'create',
        component: ProductDetailComponent,
        data: { title: 'Create' },
        children: [
          {
            path: '',
            component: ProductFormComponent,
          },
        ],
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductsResolver,
        },
        data: { title: 'Product' },
        children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full' },
          {
            path: 'edit',
            component: ProductFormComponent,
            data: { title: 'Edit' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

import { Routes } from '@angular/router'

import { ProductFormComponent } from './product-form.component'
import { ProductListComponent } from './product-list.component'

export const ContentProductsRoutes: Routes = [ {
  path: 'products',
  data: {
    title: 'Products'
  },
  children: [
    { path: '', component: ProductListComponent, data: { title: 'List' } },
    { path: 'add', component: ProductFormComponent, data: { title: 'Add' } },
    { path: 'edit/:id', component: ProductFormComponent, data: { title: 'Edit' } },
  ],
} ]

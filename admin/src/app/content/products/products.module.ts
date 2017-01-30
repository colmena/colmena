import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

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
export class ProductsModule {
  moduleLink = {
    weight: 30, label: 'Products', icon: 'icon-basket', link: [ '/', 'content', 'products' ]
  }
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'APP_CONTENT_DASHBOARD', payload: this.moduleLink})
  }
}

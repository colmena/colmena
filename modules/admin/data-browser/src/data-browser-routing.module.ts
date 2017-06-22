import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BrowserComponent } from './browser/browser.component'
import { BrowserItemComponent } from './browser/browser-item.component'
import { BrowserItemsComponent } from './browser/browser-items.component'
import { BrowserListComponent } from './browser/browser-list.component'

export const routes: Routes = [ {
  path: '',
  data: {
    title: 'Data Browser',
  },
  component: BrowserComponent,
  children: [
    {
      path: '',
      component: BrowserListComponent,
      children: [
        {
          path: ':modelName',
          component: BrowserItemsComponent,
          data: { title: ':modelName' }
        },
        {
          path: ':modelName/:modelId',
          component: BrowserItemComponent,
          data: { title: ':modelId' }
        },
      ]
    },
  ],
} ]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BrowserRoutingModule {
}

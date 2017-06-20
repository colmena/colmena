import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { BrowserRoutingModule } from './data-browser-routing.module';

import { DataBrowserApi } from './data-browser.service'

import { BrowserComponent } from './browser/browser.component'
import { BrowserItemComponent } from './browser/browser-item.component'
import { BrowserItemsComponent } from './browser/browser-items.component'
import { BrowserListComponent } from './browser/browser-list.component'

@NgModule({
  imports: [
    ColmenaUiModule,
    BrowserRoutingModule,
  ],
  declarations: [
    BrowserComponent,
    BrowserItemComponent,
    BrowserItemsComponent,
    BrowserListComponent,
  ],
  providers: [
    DataBrowserApi,
  ],
  exports: [],
})
export class DataBrowserModule {}


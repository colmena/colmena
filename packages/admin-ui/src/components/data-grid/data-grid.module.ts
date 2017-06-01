import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PaginationModule } from 'ngx-bootstrap/pagination'
import { AlertModule } from 'ngx-bootstrap/alert'

import { UiDataGridComponent } from './data-grid.component'

import { HeaderComponent } from './header/header.component'
import { IconComponent } from './icons/icon/icon.component'
import { IconsComponent } from './icons/icons.component'
import { ItemButtonsComponent } from './item-buttons/item-buttons.component'
import { PagerComponent } from './pager/pager.component'
import { RowsComponent } from './rows/rows.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  declarations: [
    UiDataGridComponent,

    HeaderComponent,
    IconComponent,
    IconsComponent,
    ItemButtonsComponent,
    RowsComponent,
    PagerComponent
  ],
  providers: [],
  exports: [
    UiDataGridComponent,
  ]
})
export class UiDataGridModule { }

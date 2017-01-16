import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PaginationModule } from 'ng2-bootstrap/pagination'
import { AlertModule } from 'ng2-bootstrap/alert'

import { FcDataGridComponent } from './fc-data-grid.component'

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
    FcDataGridComponent,

    HeaderComponent,
    IconComponent,
    IconsComponent,
    ItemButtonsComponent,
    RowsComponent,
    PagerComponent
  ],
  providers: [],
  exports: [
    FcDataGridComponent,
  ]
})
export class FcDataGridModule { }

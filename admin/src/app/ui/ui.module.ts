import { UiService } from './ui.service'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ToastyService, ToastyModule } from 'ng2-toasty'

import { UiCrudDetailsComponent } from './crud-details/ui-crud-details.component'
import { UiCrudFormComponent } from './crud-form/ui-crud-form.component'
import { UiCrudListComponent } from './crud-list/ui-crud-list.component'
import { UiFormComponent } from './form/ui-form.component'
import { UiTableComponent } from './table/ui-table.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastyModule.forRoot()
  ],
  exports: [
    UiCrudDetailsComponent,
    UiCrudFormComponent,
    UiCrudListComponent,
    UiFormComponent,
    UiTableComponent,
    ToastyModule,
  ],
  declarations: [
    UiCrudDetailsComponent,
    UiCrudFormComponent,
    UiCrudListComponent,
    UiFormComponent,
    UiTableComponent
  ],
  providers: [
    UiService,
    ToastyService,
  ]
})
export class UiModule {
}

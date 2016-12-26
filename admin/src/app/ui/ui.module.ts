import { UiService } from './ui.service'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ToastyService, ToastyModule } from 'ng2-toasty'

import { UiCrudDetailsComponent } from './ui-crud-details.component'
import { UiCrudFormComponent } from './ui-crud-form.component'
import { UiCrudListComponent } from './ui-crud-list.component'
import { UiFormComponent } from './ui-form.component'
import { UiTableComponent } from './ui-table.component'

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

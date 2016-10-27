import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {UiCrudDetailsComponent} from './ui-crud-details.component';
import {UiCrudFormComponent} from './ui-crud-form.component';
import {UiCrudListComponent} from './ui-crud-list.component';
import {UiFormComponent} from './ui-form.component';
import {UiTableComponent} from './ui-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    UiCrudDetailsComponent,
    UiCrudFormComponent,
    UiCrudListComponent,
    UiFormComponent,
    UiTableComponent
  ],
  declarations: [
    UiCrudDetailsComponent,
    UiCrudFormComponent,
    UiCrudListComponent,
    UiFormComponent,
    UiTableComponent
  ],
})
export class UiModule {
}

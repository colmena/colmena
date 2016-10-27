import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {UiFormComponent} from './ui-form.component';
import {UiTableComponent} from './ui-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    UiFormComponent,
    UiTableComponent
  ],
  declarations: [
    UiFormComponent,
    UiTableComponent
  ],
})
export class UiModule {
}

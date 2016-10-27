import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {AuthorsRoutingModule}     from './authors-routing.module';

import {AuthorDetailsComponent}   from './author-details.component';
import {AuthorFormComponent}      from './author-form.component';
import {AuthorListComponent}      from './author-list.component';
import {UiModule}                 from '../ui/ui.module';
import {AuthorsService} from './authors.service';

@NgModule({
  imports: [
    AuthorsRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    AuthorDetailsComponent,
    AuthorFormComponent,
    AuthorListComponent,
  ],
  providers: [
    AuthorsService,
  ]
})
export class AuthorsModule {
}

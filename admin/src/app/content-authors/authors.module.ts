import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {AuthorsRoutingModule}     from './authors-routing.module';

import {AuthorDetailsComponent}   from './author-details.component';
import {AuthorFormComponent}      from './author-form.component';
import {AuthorListComponent}      from './author-list.component';

@NgModule({
  imports: [
    AuthorsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AuthorDetailsComponent,
    AuthorFormComponent,
    AuthorListComponent,
  ]
})
export class AuthorsModule {
}

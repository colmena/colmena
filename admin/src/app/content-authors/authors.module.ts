import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';

import { AuthorsComponent }         from './authors.component';

import { AuthorsRoutingModule }     from './authors-routing.module';

@NgModule({
    imports: [
      AuthorsRoutingModule,
      CommonModule,
      FormsModule
    ],
    declarations: [
        AuthorsComponent,
    ]
})
export class AuthorsModule { }

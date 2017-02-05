import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

const modules = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  RouterModule,

  FormlyBootstrapModule,

  ColmenaUiModule,
]

@NgModule({
  imports: [
    ...modules,
    FormlyModule.forRoot(),
  ],
  exports: [
    ...modules,
  ]
})
export class AppSharedModule { }

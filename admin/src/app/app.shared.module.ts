import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly'

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
    FormlyModule,
    ...modules,
  ]
})
export class AppSharedModule { }

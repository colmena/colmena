import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';

import {DomainsComponent}         from './domains.component';
import {DomainsRoutingModule}     from './domains-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DomainsRoutingModule
  ],
  declarations: [
    DomainsComponent
  ]
})
export class DomainsModule {
}

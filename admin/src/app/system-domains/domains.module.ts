import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {FormsModule}              from '@angular/forms';

import {DomainsRoutingModule}     from './domains-routing.module';

import {DomainDetailsComponent}   from './domain-details.component';
import {DomainFormComponent}      from './domain-form.component';
import {DomainListComponent}      from './domain-list.component';
import {UiModule}                 from '../ui/ui.module';
import {DomainsService} from './domains.service';

@NgModule({
  imports: [
    DomainsRoutingModule,
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    DomainDetailsComponent,
    DomainFormComponent,
    DomainListComponent,
  ],
  providers: [
    DomainsService,
  ]
})
export class DomainsModule {
}

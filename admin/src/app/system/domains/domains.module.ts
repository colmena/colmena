import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../app.shared.module'

import { DomainFormComponent } from './domain-form.component'
import { DomainListComponent } from './domain-list.component'

import { DomainsService } from './domains.service'

@NgModule({
  imports: [
    AppSharedModule,
  ],
  declarations: [
    DomainFormComponent,
    DomainListComponent,
  ],
  providers: [
    DomainsService,
  ],
})
export class DomainsModule {}

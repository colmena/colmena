import { NgModule } from '@angular/core'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { DomainsRoutingModule } from './domains-routing.module'

import { DomainsService } from './domains.service'
import { DomainResolver } from './domains.resolvers'

import { DomainDetailComponent } from './components/domain-detail.component'
import { DomainFormComponent } from './components/domain-form.component'
import { DomainHeaderComponent } from './components/domain-header.component'
import { DomainListComponent } from './components/domain-list.component'

@NgModule({
  imports: [ColmenaUiModule, DomainsRoutingModule],
  declarations: [DomainDetailComponent, DomainFormComponent, DomainHeaderComponent, DomainListComponent],
  providers: [DomainsService, DomainResolver],
})
export class SystemDomainsModule {}

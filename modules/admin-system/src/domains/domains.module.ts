import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ColmenaUiModule } from '@colmena/admin-ui'

import { DomainDetailComponent } from './containers/domain-detail.component'
import { DomainFormComponent } from './components/domain-form.component'
import { DomainHeaderComponent } from './components/domain-header.component'
import { DomainListComponent } from './containers/domain-list.component'

import { DomainsService } from './domains.service'

import { SystemDomainResolver } from './domains.resolvers'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColmenaUiModule,
    RouterModule,
  ],
  declarations: [
    DomainDetailComponent,
    DomainFormComponent,
    DomainHeaderComponent,
    DomainListComponent,
  ],
  providers: [
    DomainsService,
    SystemDomainResolver,
  ],
})
export class SystemDomainsModule { }

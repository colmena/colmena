import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

import { DomainFormComponent } from './domain-form.component'
import { DomainListComponent } from './domain-list.component'

import { DomainsService } from './domains.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColmenaUiModule,
  ],
  declarations: [
    DomainFormComponent,
    DomainListComponent,
  ],
  providers: [
    DomainsService,
  ],
})
export class DomainsModule {
}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { UiModule } from '../../ui/ui.module'

import { DomainFormComponent } from './domain-form.component'
import { DomainListComponent } from './domain-list.component'

import { DomainsService } from './domains.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
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

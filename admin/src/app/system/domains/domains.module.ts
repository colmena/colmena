import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

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
export class DomainsModule {

  constructor(private store: Store<any>) {
    this.store.dispatch({
      type: 'LAYOUT_HEADER_NAV', payload: {
        weight: 10, label: 'Domains', icon: 'icon-globe', link: [ '/', 'system', 'domains' ]
      }
    })
  }

}

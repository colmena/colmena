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
  moduleLink = {
    weight: 110, label: 'Domains', icon: 'icon-globe', link: [ '/', 'system', 'domains' ]
  }
  constructor(private store: Store<any>) {
    this.store.dispatch({ type: 'LAYOUT_HEADER_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'LAYOUT_SIDEBAR_NAV', payload: this.moduleLink })
    this.store.dispatch({ type: 'APP_SYSTEM_DASHBOARD', payload: this.moduleLink })
  }
}

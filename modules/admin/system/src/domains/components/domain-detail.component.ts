import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { DomainsService } from '../domains.service'

@Component({
  selector: 'app-domain-detail',
  template: `
    <ui-page [tabs]="tabs">
      <header>
        <app-domain-header [item]="item"></app-domain-header>
      </header>
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class DomainDetailComponent implements OnInit {
  public tabs: UiTabLink[] = [{ icon: 'fa fa-pencil', title: 'Edit', link: 'edit' }]

  public item: any

  constructor(private service: DomainsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = this.route.snapshot.data.systemDomain

    if (!this.item) {
      this.tabs = [{ icon: 'fa fa-plus', title: 'Create', link: '' }]
    }
    this.service.setSelectedDomain(this.item)
  }
}

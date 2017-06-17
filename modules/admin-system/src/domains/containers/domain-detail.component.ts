import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { DomainsService } from '../domains.service'

@Component({
  selector: 'app-domain-detail',
  template: `
    <div class="card">
      <div class="card-header">
        <app-domain-header [item]="item"></app-domain-header>
        <ui-tabs [tabs]="tabs"></ui-tabs>
      </div>
      <div class="card-block">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .card-header {
      padding-bottom: 0;
    }
  `],
})
export class DomainDetailComponent implements OnInit {

  public tabs: UiTabLink[] = [
    { icon: 'fa fa-pencil', title: 'Edit', link: 'edit' },
  ]

  public item: any

  constructor(
    private service: DomainsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.systemDomain

    if (!this.item) {
      this.tabs = [
        { icon: 'fa fa-plus', title: 'Create', link: '' },
      ]
    }
    this.service.setSelectedDomain(this.item)
  }
}

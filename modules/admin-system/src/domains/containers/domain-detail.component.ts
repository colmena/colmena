import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { DomainsService } from '../domains.service'
import { NavTabLink } from '../components/domain-tabs.component'

@Component({
  selector: 'app-domain-detail',
  template: `
    <div class="card">
      <div class="card-header">
        <app-domain-header [item]="item"></app-domain-header>
        <app-domain-tabs [tabs]="tabs"></app-domain-tabs>
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
  public tabs: NavTabLink[] = [
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

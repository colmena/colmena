import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { PagesService } from '../pages.service'

@Component({
  selector: 'app-page-detail',
  template: `
    <ui-page [tabs]="tabs" [title]="item ? item.name : 'Add New Page'">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class PageDetailComponent implements OnInit {
  public tabs: UiTabLink[] = [{ icon: 'fa fa-pencil', title: 'Edit', link: 'edit' }]

  public item: any

  constructor(private service: PagesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = this.route.snapshot.data.page

    if (!this.item) {
      this.tabs = [{ icon: 'fa fa-plus', title: 'Create', link: '' }]
    }
    this.service.setSelectedPage(this.item)
  }
}

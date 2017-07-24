import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { FormsService } from '../forms.service'

@Component({
  selector: 'app-form-detail',
  template: `
    <ui-page [tabs]="tabs" [title]="item ? item.title : 'Add New Form'">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class FormDetailComponent implements OnInit {
  public tabs: UiTabLink[] = [
    { icon: 'fa fa-pencil', title: 'Edit', link: 'edit' },
    { icon: 'fa fa-pencil', title: 'Builder', link: 'builder' },
  ]

  public item: any

  constructor(private service: FormsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = this.route.snapshot.data.form

    if (!this.item) {
      this.tabs = [
        { icon: 'fa fa-plus', title: 'Create', link: '' },
      ]
    }
    this.service.setSelectedForm(this.item)
  }
}

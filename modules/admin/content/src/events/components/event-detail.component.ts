import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { UiTabLink } from '@colmena/admin-ui'

import { EventsService } from '../events.service'

@Component({
  selector: 'app-event-detail',
  template: `
    <ui-page [tabs]="tabs" [title]="item ? item.name : 'Add New Event'">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class EventDetailComponent implements OnInit {
  public tabs: UiTabLink[] = [{ icon: 'fa fa-pencil', title: 'Edit', link: 'edit' }]

  public item: any

  constructor(private service: EventsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = this.route.snapshot.data.event

    if (!this.item) {
      this.tabs = [{ icon: 'fa fa-plus', title: 'Create', link: '' }]
    }
    this.service.setSelectedEvent(this.item)
  }
}

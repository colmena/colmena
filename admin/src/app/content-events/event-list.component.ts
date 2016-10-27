import {Component, OnInit} from '@angular/core';

import {EventsService} from './events.service';

@Component({
  selector: 'app-events',
  template: '<ui-crud-list [service]="service"></ui-crud-list>'
})
export class EventListComponent implements OnInit {

  constructor(private service: EventsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}

import {Component, OnInit} from '@angular/core';

import {EventsService} from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {

  constructor(private service: EventsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}

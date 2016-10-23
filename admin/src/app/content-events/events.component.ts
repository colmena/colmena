import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Event, FireLoopRef} from '../shared/sdk/models';
import {RealTime} from '../shared/sdk/services';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent {

  private event: Event = new Event();
  private events: Observable<Event[]>;
  private reference: FireLoopRef<Event>;

  constructor(private rt: RealTime) {
    this.reference = this.rt.FireLoop.ref<Event>(Event);
    this.events = this.reference.on('changes');
  }

  upsert(): void {
    if (this.event.id) {
      this.reference.upsert(this.event).subscribe();
      this.new();
    } else {
      this.reference.create(this.event).subscribe(() => this.event = new Event());
    }
  }

  select(event: Event): void {
    this.event = event;
  }

  remove(event: Event): void {
    this.reference.remove(event).subscribe();
  }

  new(): void {
    this.event = new Event();
  }
}

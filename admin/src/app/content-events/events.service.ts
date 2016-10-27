import {Injectable} from '@angular/core';
import {EventApi} from '../shared/sdk/services';
import {Event} from '../shared/sdk/models';

@Injectable()
export class EventsService {

  constructor(private eventApi: EventApi) {}

  public icon = 'icon-calendar';
  public title = 'Events';

  public fields = [
    'id',
    'domainId',
    'name',
    'date',
    'location',
  ]

  public formConfig = {
    fields: [
      {name: 'name', label: 'Name', type: 'text', placeholder: 'Name'},
      {name: 'date', label: 'Date', type: 'text', placeholder: 'Date'},
      {name: 'location', label: 'Location', type: 'text', placeholder: 'Location'},
    ]
  };

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'name', label: 'Name', link: './'},
      {field: 'date', label: 'Date'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id)},
    ]
  };

  private item: Event = new Event();
  private items: Event[];

  deleteItem(id) {
    return this.eventApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.eventApi.findById(id).subscribe(res => this.item = res);
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.eventApi.find().subscribe(res => (this.items = res));
  }

  newItem() {
    this.item = new Event();
  }

  upsertItem(successCb, errorCb): void {
    this.eventApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}

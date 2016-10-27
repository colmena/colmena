import {Injectable} from '@angular/core';
import {AuthorApi} from '../shared/sdk/services';
import {Author} from '../shared/sdk/models';

@Injectable()
export class AuthorsService {

  constructor(private authorApi: AuthorApi) {}

  public icon = 'icon-people';
  public title = 'Authors';

  public fields = [
    'id',
    'domainId',
    'firstName',
    'lastName',
    'username',
    'email',
    'active',
    'created',
    'modified',
  ]

  public formConfig = {
    fields: [
      {name: 'firstName', label: 'First name', type: 'text', placeholder: 'First name'},
      {name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name'},
      {name: 'username', label: 'Username', type: 'text', placeholder: 'Username'},
      {name: 'email', label: 'Email', type: 'email', placeholder: 'Email'},
    ]
  };

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'firstName', label: 'First name', link: './'},
      {field: 'lastName', label: 'Last name', link: './'},
      {field: 'username', label: 'Username'},
      {field: 'email', label: 'Email'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id)},
    ]
  };

  private item: Author = new Author();
  private items: Author[];

  deleteItem(id) {
    return this.authorApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.authorApi.findById(id).subscribe(res => this.item = res);
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.authorApi.find().subscribe(res => (this.items = res));
  }

  newItem() {
    this.item = new Author();
  }

  upsertItem(successCb, errorCb): void {
    this.authorApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}

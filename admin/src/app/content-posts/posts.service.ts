import {Injectable} from '@angular/core';
import {PostApi} from '../shared/sdk/services';
import {Post} from '../shared/sdk/models';

@Injectable()
export class PostsService {

  constructor(private postApi: PostApi) {}

  public icon = 'icon-calendar';
  public title = 'Posts';

  public fields = [
    'id',
    'domainId',
    'title',
    'content',
  ]

  public formConfig = {
    fields: [
      {name: 'title', label: 'Title', type: 'text', placeholder: 'Title'},
      {name: 'content', label: 'Content', type: 'text', placeholder: 'Content'},
    ]
  };

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'title', label: 'Title', link: './'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id)},
    ]
  };

  private item: Post = new Post();
  private items: Post[];

  deleteItem(id) {
    return this.postApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.postApi.findById(id).subscribe(res => this.item = res);
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.postApi.find().subscribe(res => (this.items = res));
  }

  newItem() {
    this.item = new Post();
  }

  upsertItem(successCb, errorCb): void {
    this.postApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}

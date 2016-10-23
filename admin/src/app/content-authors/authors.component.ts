import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Author, FireLoopRef } from '../shared/sdk/models';
import { RealTime } from '../shared/sdk/services';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent implements OnInit {

  private page = {
    title: 'Authors',
    icon: 'icon-people',
  };

  private tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      { field: 'firstName', label: 'First name', click: item => this.select(item) },
      { field: 'lastName', label: 'Last name', click: item => this.select(item) },
      { field: 'username', label: 'Username' },
      { field: 'email', label: 'Email' },
    ],
    rowButtons: [
      { class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', click: item => this.select(item) },
      { class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: item => this.remove(item) },
    ]
  };

  private formConfig = {
    fields: [
      { name: 'firstName', label: 'First name', type: 'text', placeholder: 'First name'},
      { name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name'},
      { name: 'username', label: 'Username', type: 'text', placeholder: 'Username'},
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Email'},
    ]
  };

  private item: Author = new Author();
  private items: Observable<Author[]>;
  private reference: FireLoopRef<Author>;

  constructor(private rt: RealTime) {}

  ngOnInit() {
    this.reference = this.rt.FireLoop.ref<Author>(Author);
    this.items = this.reference.on('changes');
  }

  upsert(): void {
    if (this.item.id) {
      this.reference.upsert(this.item).subscribe();
      this.new();
    } else {
      this.reference.create(this.item).subscribe(() => this.item = new Author());
    }
  }

  select(item: Author): void {
    this.item = item;
  }

  remove(item: Author): void {
    this.reference.remove(item).subscribe();
  }

  new(): void {
    this.item = new Author();
  }
}

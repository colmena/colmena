import {Component, OnInit} from '@angular/core';

import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-authors',
  template: '<ui-crud-list [service]="service"></ui-crud-list>'
})
export class AuthorListComponent implements OnInit {

  constructor(private service: AuthorsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}

import {Component, OnInit} from '@angular/core'

import {UsersService} from './users.service'

@Component({
  selector: 'app-users',
  template: '<ui-crud-list [service]="service"></ui-crud-list>',
})
export class UserListComponent implements OnInit {

  constructor(private service: UsersService) {}

  ngOnInit() {
    this.service.getItems()
  }

}

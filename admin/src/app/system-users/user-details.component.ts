import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UsersService} from './users.service';

@Component({
  selector: 'app-user-details',
  template: '<ui-crud-details [service]="service"></ui-crud-details>'
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UsersService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}

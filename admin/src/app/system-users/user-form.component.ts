import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UsersService} from './users.service';

@Component({
  selector: 'app-user-form',
  template: '<ui-crud-form [service]="service" (submit)="upsert()"></ui-crud-form>'
})
export class UserFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: UsersService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

  upsert(): void {
    this.service.upsertItem(
      res => this.router.navigate(['../'], {relativeTo: this.route}),
      err => console.error(err)
    )
  }

}

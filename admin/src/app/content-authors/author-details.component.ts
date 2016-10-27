import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-author-details',
  template: '<ui-crud-details [service]="service"></ui-crud-details>'
})
export class AuthorDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AuthorsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}

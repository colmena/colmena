import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PostsService} from './posts.service';

@Component({
  selector: 'app-post-details',
  template: '<ui-crud-details [service]="service"></ui-crud-details>'
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}

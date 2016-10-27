import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PostsService} from './posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}

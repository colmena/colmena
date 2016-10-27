import {Component, OnInit} from '@angular/core';

import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}

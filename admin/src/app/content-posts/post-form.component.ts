import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PostsService} from './posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: PostsService) {}

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

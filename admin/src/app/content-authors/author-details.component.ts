import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html'
})
export class AuthorDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AuthorsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Author} from '../shared/sdk/models';
import {AuthorApi} from '../shared/sdk/services';

import {AuthorsConfig} from './authors-config'

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html'
})
export class AuthorDetailsComponent implements OnInit {

  private item: Author = new Author();
  private module = new AuthorsConfig();

  constructor(private route: ActivatedRoute, private authorApi: AuthorApi) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.authorApi.findById(id).subscribe(res => this.item = res)
      });
  }

}

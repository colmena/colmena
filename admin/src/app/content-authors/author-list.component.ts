import {Component, OnInit} from '@angular/core';

import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent implements OnInit {

  constructor(private service: AuthorsService) {}

  ngOnInit() {
    this.service.getItems()
  }

}

import { Component, OnInit } from '@angular/core'

import { DomainsService } from './domains.service'

@Component({
  selector: 'app-domains',
  template: '<ui-crud-list [service]="service"></ui-crud-list>',
})
export class DomainListComponent implements OnInit {

  constructor(private service: DomainsService) {
  }

  ngOnInit() {
    this.service.getItems()
  }

}

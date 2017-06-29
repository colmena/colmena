import { Component, OnInit } from '@angular/core'

import { Domain, DomainsService } from '../domains.service'

@Component({
  selector: 'app-domain-settings',
  template: `
    <pre>{{item | json}}</pre>
  `,
})
export class DomainSettingsComponent implements OnInit {

  public item: any

  constructor(
    private service: DomainsService,
  ) { }

  ngOnInit() {
    this.item = this.service.selectedDomain || new Domain()
  }

}

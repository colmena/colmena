import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { get } from 'lodash'

@Component({
  selector: 'layout-header-domains',
  template: `
    <li class="nav-item dropdown px-1" dropdown>
      <a class="nav-link dropdown-toggle"
         data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle>

        <span *ngIf="!activeDomain" class="alert alert-danger">
          Please select a domain
        </span>
        <span *ngIf="activeDomain">
          {{activeDomain.name}}
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" dropdownMenu aria-labelledby="simple-dropdown">
        <a *ngFor="let domain of domains" (click)="switchDomain($event, domain)"
          [ngClass]="{'active': domain === activeDomain }"
          class="dropdown-item" href="" >
          <i class="icon-globe"></i> 
          {{domain.name}}
        </a>
      </div>
    </li>
`,
})
export class HeaderDomainsComponent {

  public activeDomain: any
  public domains: any

  constructor(
    private store: Store<any>,
  ) {
    this.store
      .select('app')
      .subscribe((res: any) => {
        this.activeDomain = get(res, 'activeDomain')
        this.domains = get(res, 'domains')
      })
  }

  switchDomain($event, domain) {
    $event.preventDefault()
    this.store.dispatch({ type: 'APP_DOMAIN_SELECT', payload: domain })
  }

}

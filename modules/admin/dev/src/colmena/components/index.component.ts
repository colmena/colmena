import { Component } from '@angular/core'

@Component({
  template: `
    <div class="col">
      <div class="col-md-3">
        <ui-tabs-vertical [tabs]="sideLinks"></ui-tabs-vertical>
      </div>
      <div class="col-md-9">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class IndexComponent {

  public sideLinks = [
    { icon: 'icon-speedometer', title: 'Dashboard', link: [ 'dashboard' ] },
    { icon: 'fa fa-database', title: 'Data', link: [ 'data' ] },
    { icon: 'icon-present', title: 'Modules', link: [ 'modules' ] },
  ]

}

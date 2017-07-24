import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ui-card>
          <ui-card-header>
            <i class="icon-control-play"></i>
            &nbsp; Dashboard
          </ui-card-header>
          <ui-card-content>Colmena Forms Dashboard</ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
})
export class DashboardComponent {}

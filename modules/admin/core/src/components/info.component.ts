import { Component, OnInit } from '@angular/core'

import { CoreApi } from '@colmena/admin-lb-sdk'

@Component({
  selector: 'app-system-info',
  template: `
    <div class="card">
      <div class="card-header">Server Information</div>
      <div class="card-block">
        <div class="row">
          <ui-dashboard-icon class="col-md-3"
                             [count]="ping?.application?.versions?.node"
                             icon="fa fa-2x fa-code-fork"
                             label="Node Version"
                             type="warning">
          </ui-dashboard-icon>
          <ui-dashboard-icon class="col-md-3"
                             [count]="ping?.application?.node_env"
                             icon="fa fa-2x fa-server"
                             label="Node Env"
                             type="danger">
          </ui-dashboard-icon>
          <ui-dashboard-icon class="col-md-3"
                             [count]="ping?.resources?.loadavg[0] | number:'1.1-5'"
                             icon="icon-graph"
                             label="Server Load"
                             type="info">
          </ui-dashboard-icon>
          <ui-dashboard-icon class="col-md-3"
                             [count]="ping?.uptime"
                             icon="icon-clock"
                             label="Uptime"
                             type="success">
          </ui-dashboard-icon>
        </div>
      </div>
    </div>
  `,
})
export class InfoComponent implements OnInit {
  public ping: any = {}

  constructor(private coreApi: CoreApi) {
  }

  ngOnInit() {
    this.poll()
  }

  poll() {
    this.coreApi.ping()
      .subscribe((res: any) => this.ping = res)
  }
}

import { Component } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import { DataBrowserApi } from '../data-browser.service'

@Component({
  selector: 'app-browser-items',
  template: `
    <table class="table table-bordered table-striped table-hover">
      <tr>
        <th colspan="2">{{modelName}}</th>
      </tr>
      <tr *ngFor="let item of items">
        <td>
          <a href="" [routerLink]="[item.id]"># {{item.id}}</a>
        </td>
        <td>
          {{ (item.name || item.title || item.created )}}
        </td>
      </tr>
    </table>
  `,
})
export class BrowserItemsComponent {

  public modelName: any = {}
  public items

  constructor(
    public schemaApi: DataBrowserApi,
    private route: ActivatedRoute,
) {
    this.route.params.subscribe(params => this.handleRouteChange(params));
  }

  handleRouteChange(params) {
    this.modelName = params['modelName']
    this.schemaApi.setModelName(this.modelName)

    this.schemaApi.find()
      .subscribe(items => this.items = items)
  }
}

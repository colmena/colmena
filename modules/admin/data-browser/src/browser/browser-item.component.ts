import { Component } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import { DataBrowserApi } from '../data-browser.service'

@Component({
  selector: 'app-browser-item',
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <th colspan="2">
          <a href="" [routerLink]="['..']"> {{modelName}}</a> - {{modelId}}
        </th>
      </tr>
      <tr *ngFor="let field of fields">
        <th>
          {{field}}
        </th>
        <td>
          {{item[field]}}
        </td>
      </tr>
    </table>
  `,
})
export class BrowserItemComponent {
  public modelId: any = {}
  public modelName: any = {}
  public fields: string[] = []
  public item = ''
  public code = 'asdasd'

  public config = {}

  getFieldsFromItem() {
    this.fields = Object.keys(this.item)
      .filter(field => field !== 'id')
      .sort()
  }

  setItem(item) {
    this.item = item
  }

  constructor(public dataBrowserApi: DataBrowserApi, private route: ActivatedRoute) {
    this.modelId = this.route.snapshot.params['modelId']
    this.modelName = this.route.snapshot.params['modelName']
    this.dataBrowserApi.setModelName(this.modelName)

    this.dataBrowserApi
      .findById(this.modelId)
      .subscribe(item => this.setItem(item))
      .add(() => this.getFieldsFromItem())
  }
}

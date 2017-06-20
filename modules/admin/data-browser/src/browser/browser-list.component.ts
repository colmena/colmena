import { Component, OnInit } from '@angular/core'

import { DataBrowserApi } from '../data-browser.service'

@Component({
  selector: 'app-browser-list',
  template: `
    <div class="col">
      <div class="col-md-3">
        <ui-tabs-vertical [tabs]="sideLinks"></ui-tabs-vertical>
      </div>
      <div class="col-md-9">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class BrowserListComponent implements OnInit {

  public sideLinks = []

  constructor(
    public service: DataBrowserApi,
  ) {
  }

  ngOnInit() {
    this.service.getModels()
      .subscribe(res => this.handleModels(res))
  }

  handleModels(models) {
    models.map(model => {
      model.plural = model.plural ? model.plural : model.plural = model.name + 's'
      if (!model.name.includes('BaseModel')) {
        this.sideLinks.push({ title: model.name, link: [model.plural]})
      }
    })
  }
}

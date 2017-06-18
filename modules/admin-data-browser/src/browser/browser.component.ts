import { Component } from '@angular/core'

@Component({
  selector: 'app-browser',
  template: `
    <ui-page>
      <header class="mb-2"><h5 class="my-2">Data Browser</h5></header>
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class BrowserComponent {}

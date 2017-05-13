import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <ui-templates></ui-templates>
  `,
})
export class AppComponent { }

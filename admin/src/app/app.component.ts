import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    template: `
      <router-outlet></router-outlet>
      <ng2-toasty></ng2-toasty>
    `
})
export class AppComponent { }

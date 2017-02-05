import { Component } from '@angular/core'

@Component({
  selector: 'layout-main',
  template: `
    <main class="main">
      <ol class="breadcrumb">
        <layout-breadcrumbs></layout-breadcrumbs>
      </ol>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class MainComponent {}

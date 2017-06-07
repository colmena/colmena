import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-user-header',
  template: `
    <h5 class="my-2">
      {{user.firstName}} {{user.lastName}} <small>{{user.email}}</small>
    </h5>
  `,
})
export class UserHeaderComponent {

  @Input() user

}

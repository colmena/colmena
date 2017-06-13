import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-user-header',
  template: `
    <h5 class="my-2">
      <span *ngIf="user; else message">
        {{user.firstName}} {{user.lastName}} <small>{{user.email}}</small>
      </span>
      <ng-template #message>Add new user</ng-template>
    </h5>
  `,
})
export class UserHeaderComponent {

  @Input() user

}

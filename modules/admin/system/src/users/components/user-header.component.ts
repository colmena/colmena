import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-user-header',
  template: `
    <h5>
      <span *ngIf="user; else message">
        <img [src]="user.avatar">
        {{user.fullName}} <small>{{user.email}}</small>
      </span>
      <ng-template #message>Add New User</ng-template>
    </h5>
  `,
  styles: [
    `
    h5 {
      padding: 10px 0;
    }
    img {
      height: 50px;
      width: 50px;
      margin-right: 10px;
    }
  `,
  ],
})
export class UserHeaderComponent {
  @Input() user
}

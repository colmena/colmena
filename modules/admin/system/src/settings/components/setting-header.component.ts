import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-setting-header',
  template: `
    <h5 class="my-2">
      <span *ngIf="item; else message">
        {{item.key}} <small>{{item.type}}</small>
      </span>
      <ng-template #message>Add New Setting</ng-template>
    </h5>
  `,
})
export class SettingHeaderComponent {
  @Input() item
}

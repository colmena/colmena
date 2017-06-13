import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-domain-header',
  template: `
    <h5 class="my-2">
      <span *ngIf="item; else message">
        {{item.name}} <small>{{item.id}}</small>
      </span>
      <ng-template #message>Add New Domain</ng-template>
    </h5>
  `,
})
export class DomainHeaderComponent {

  @Input() item

}

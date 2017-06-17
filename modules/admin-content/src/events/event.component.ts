import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-content-event',
  template: `
    <ui-card>
      <ui-card-header>
        <i class="icon-event"></i>
        {{item.name}}
      </ui-card-header>
      <ui-card-content>
        <p *ngIf="item.storageFile?.url"><img src="{{item.storageFile?.url}}" class="img-fluid" ></p>
        <div *ngIf="item.description" [innerHtml]="item.description"></div>
      </ui-card-content>
      <ui-card-footer>
        <div *ngIf="item.date"><strong>Date: </strong>{{item.date}}</div>
        <div *ngIf="item.location"><strong>Location: </strong>{{item.location}}</div>
      </ui-card-footer>
    </ui-card>
  `,
})
export class EventComponent {

  @Input() item: any = {}

}

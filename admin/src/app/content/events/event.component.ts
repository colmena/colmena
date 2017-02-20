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
        <p *ngIf="item.file?.url"><img src="{{item.file?.url}}" class="img-fluid" ></p>
        <p *ngIf="item.description" class="line-breaker" [innerHtml]="item.description"></p>
      </ui-card-content>
      <ui-card-footer>
        <div *ngIf="item.date"><strong>Date: </strong>{{item.date}}</div>
        <div *ngIf="item.location"><strong>Location: </strong>{{item.location}}</div>
      </ui-card-footer>
    </ui-card>
  `,
  styles: [`
    .line-breaker {
      white-space: pre-line;
    }
  `]
})
export class EventComponent {

  @Input() item: any = {}

}

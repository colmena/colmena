import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-content-post',
  template: `
    <ui-card>
      <ui-card-header>
        <i class="icon-note"></i>
        {{item.title}}
      </ui-card-header>
      <ui-card-content>
        <p *ngIf="item.file?.url"><img src="{{item.file?.url}}" class="img-fluid" ></p>
        <p *ngIf="item.content" class="line-breaker" [innerHtml]="item.content"></p>
      </ui-card-content>
    </ui-card>
  `,
  styles: [`
    .line-breaker {
      white-space: pre-line;
    }
  `]
})
export class PostComponent {

  @Input() item: any = {}

}

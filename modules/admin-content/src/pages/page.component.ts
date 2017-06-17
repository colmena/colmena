import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-content-page',
  template: `
    <ui-card>
      <ui-card-header>
        <i class="icon-book-open"></i>
        {{item.name}}
      </ui-card-header>
      <ui-card-content>
        <p *ngIf="item.file?.url"><img src="{{item.file?.url}}" class="img-fluid" ></p>
        <p *ngIf="item.content" [innerHtml]="item.content"></p>
      </ui-card-content>
    </ui-card>
  `,
})
export class PageComponent {

  @Input() item: any = {}

}

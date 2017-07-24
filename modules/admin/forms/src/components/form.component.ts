import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-form',
  template: `
    <ui-card>
      <ui-card-header>
        <i class="icon-note"></i>
        {{item.title}}
      </ui-card-header>
      <ui-card-content>
        <p *ngIf="item.storageFile?.url"><img src="{{item.storageFile?.url}}" class="img-fluid" ></p>
        <div *ngIf="item.content" [innerHtml]="item.content"></div>
      </ui-card-content>
    </ui-card>
  `,
})
export class FormComponent {

  @Input() item: any = {}

}

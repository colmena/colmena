import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-content-product',
  template: `
    <ui-card>
      <ui-card-header>
        <i class="icon-basket"></i>
        {{item.name}}
      </ui-card-header>
      <ui-card-content>
        <p *ngIf="item.file?.url"><img src="{{item.file?.url}}" class="img-fluid" ></p>
        <p *ngIf="item.description" [innerHtml]="item.description"></p>
      </ui-card-content>
      <ui-card-footer>
        <span *ngIf="item.sku">SKU: {{item.sku}}</span>
      </ui-card-footer>
    </ui-card>
  `,
})
export class ProductComponent {

  @Input() item: any = {}

}

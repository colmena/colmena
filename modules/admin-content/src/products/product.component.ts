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
        <p *ngIf="item.storageFile?.url"><img src="{{item.storageFile?.url}}" class="img-fluid" ></p>
        <div *ngIf="item.description" [innerHtml]="item.description"></div>
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

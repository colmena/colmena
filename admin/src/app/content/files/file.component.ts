import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-content-file',
  template: `
    <ui-card>
      <ui-card-header>
        <i class="icon-doc"></i>
        {{item.name}}
      </ui-card-header>
      <ui-card-content>
        <img src="{{item.url}}" class="img-fluid">
      </ui-card-content>
      <ui-card-footer>
        <div class="btn-group pull-right">
          <span class="btn btn-secondary" title="Linked to {{item?.events?.length}} event(s)">
            <i class="icon-event"></i>
            {{item?.events?.length}}
          </span>  
          <span class="btn btn-secondary" title="Linked to {{item?.pages?.length}} pages(s)">
            <i class="icon-book-open"></i> 
            {{item?.pages?.length}}
          </span>
          <span class="btn btn-secondary" title="Linked to {{item?.posts?.length}} post(s)">
            <i class="icon-pencil"></i> 
            {{item?.posts?.length}}
          </span>
          <span class="btn btn-secondary" title="Linked to {{item?.products?.length}} product(s)">
            <i class="icon-basket"></i>
            {{item?.products?.length}}
          </span>  
        </div>
        <div *ngIf="item.size"><strong>Size: </strong>{{item.size}}</div>
        <div *ngIf="item.type"><strong>Type: </strong>{{item.type}}</div>
      </ui-card-footer>
    </ui-card>
  `,
})
export class FileComponent {

  @Input() item: any = {}

}

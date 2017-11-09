import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-storage-file',
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
          <span class="btn btn-secondary" title="Linked to {{item?.contentEvents?.length}} event(s)">
            <i class="icon-event"></i>
            {{item?.contentEvents?.length}}
          </span>
          <span class="btn btn-secondary" title="Linked to {{item?.contentPages?.length}} pages(s)">
            <i class="icon-book-open"></i>
            {{item?.contentPages?.length}}
          </span>
          <span class="btn btn-secondary" title="Linked to {{item?.contentPosts?.length}} post(s)">
            <i class="icon-pencil"></i>
            {{item?.contentPosts?.length}}
          </span>
          <span class="btn btn-secondary" title="Linked to {{item?.contentProducts?.length}} product(s)">
            <i class="icon-basket"></i>
            {{item?.contentProducts?.length}}
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

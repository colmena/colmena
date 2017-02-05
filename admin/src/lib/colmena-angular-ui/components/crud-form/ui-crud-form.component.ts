import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'ui-crud-form',
  template: `
    <div class="card">
      <form (submit)="submit">
        <div class="card-header">
          <i class="{{service.icon}}"></i>
          <span *ngIf="service.item.id">Edit</span>
          <span *ngIf="!service.item.id">Add</span>
        </div>
        <div class="card-block">
          <div *ngFor="let field of service.formConfig.fields" class="form-group">
            <label>{{field.label}}</label>
            <input type="{{field.type}}"
                   id="{{field.name}}"
                   class="form-control"
                   name="{{field.name}}"
                   [(ngModel)]="service.item[field.name]"
                   placeholder="{{field.placeholder}}"/>
          </div>
        </div>
        <div class="card-footer">
          <div class="float-xs-right">
            <span *ngIf="service.item.id">
              <button type="submit" class="btn btn-sm btn-outline-success">Update</button>
            </span>
            <span *ngIf="!service.item.id">
              <button type="submit" class="btn btn-sm btn-outline-success">Add</button>
            </span>
          </div>
        </div>
      </form>
    </div>
`
})
export class UiCrudFormComponent {
  @Input() service
  @Output() submit = new EventEmitter()
}

import { Component, OnInit } from '@angular/core'
import { FieldType } from 'ng-formly'

@Component({
  selector: 'ui-formly-field-wysiwyg',
  template: `
    <quill-editor
      [formlyAttributes]="field"
      [(ngModel)]="model[key]"
      [theme]="theme"
      [modules]="toolbar"></quill-editor>
  `,
})
export class FormlyFieldWysiwygComponent extends FieldType implements OnInit {

  public toolbars = {
    default: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['clean'],
        ['link'],
      ],
    },
    basic: {
      toolbar: true,
    },
  }

  public toolbar = this.toolbars.basic
  public theme = 'snow'

  ngOnInit() {
    this.toolbar = this.toolbars[this.to['toolbar']] || this.toolbars.default
    this.theme = this.to['theme'] || this.theme
  }


}

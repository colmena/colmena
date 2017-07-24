import { Injectable } from '@angular/core';
import { FormService } from '@colmena/admin-ui';

@Injectable()
export class BuilderService {

  types = [
    {
      name: 'Input',
      type: 'input',
      key: 'name',
      icon: 'fa fa-fw fa-keyboard-o',
      options: { label: 'Name', placeholder: 'Name' },
    },
    {
      name: 'Password',
      type: 'password',
      key: 'password',
      icon: 'fa fa-fw fa-key',
      options: { label: 'Password', placeholder: 'Password' },
    },
    {
      name: 'Email',
      type: 'email',
      key: 'email',
      icon: 'fa fa-fw fa-envelope',
      options: { label: 'Email', placeholder: 'Email' },
    },
    {
      name: 'Date',
      type: 'date',
      key: 'date',
      icon: 'fa fa-fw fa-calendar',
      options: { label: 'Date' },
    },
    {
      name: 'Select',
      type: 'select',
      key: 'select',
      icon: 'fa fa-fw fa-mouse-pointer',
      options: {
        label: 'Select',
        options: [
          { value: 'option-value-1', label: 'option-label-1' },
          { value: 'option-value-2', label: 'option-label-2' },
        ]
      }
    },
    {
      name: 'Textarea',
      type: 'textarea',
      key: 'description',
      icon: 'fa fa-fw fa-font',
      options: { label: 'Description', placeholder: 'Description' },
    },
    {
      name: 'Rich Text',
      type: 'wysiwyg',
      key: 'wysiwyg',
      icon: 'fa fa-fw fa-paint-brush',
      options: { label: 'Rich Text', placeholder: 'Rich Text' },
    },
  ];

  constructor(private formService: FormService) {}

  fieldTypes() {
    return this.types
  }

  fieldTypeIcon(name) {
    return this.fieldTypeIcons()[ name ]
  }

  fieldTypeIcons() {
    return this.fieldTypes().reduce((a, c) => Object.assign(a, { [c.type]: c.icon }), {})
  }

  fieldTypesNames() {
    return this.fieldTypes().map(type => type.type)
  }

  parseDefinition(definition) {
    return definition.map(formEntry => {
      return this.formService[formEntry.type](formEntry.key, formEntry.options)
    })
  }

}

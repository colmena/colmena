import { ConfigOption } from 'ng-formly'

import { FormlyFieldWysiwygComponent } from './formly-wysiwyg/wysiwyg.component'

export const formlyConfig: ConfigOption = {
  types: [
    {
      name: 'wysiwyg',
      component: FormlyFieldWysiwygComponent,
      wrappers: ['fieldset', 'label'],
    },
  ],
}

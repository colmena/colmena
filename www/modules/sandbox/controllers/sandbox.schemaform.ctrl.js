(function () {
  'use strict';
  angular.module('com.module.sandbox')
    .controller('SandboxSchemaformCtrl', function (CoreService) {

      this.model = {};

      this.schema = {
        type: 'object',
        title: 'Comment',
        properties: {
          name: {
            title: 'Name',
            type: 'string'
          },
          email: {
            title: 'Email',
            type: 'string',
            pattern: '^\\S+@\\S+$'
          },
          comment: {
            title: 'Comment',
            type: 'string'
          }
        },
        required: [
          'name',
          'email',
          'comment'
        ]
      }
      ;

      this.form = [
        'name',
        'email',
        {
          key: 'comment',
          type: 'textarea',
          placeholder: 'Make a comment'
        },
        {
          type: 'submit',
          title: 'OK'
        }
      ];

      this.onSubmit = function () {
        CoreService.alertSuccess('Good job!', 'Well done, ' + this.model.name);
      };
    });

})();

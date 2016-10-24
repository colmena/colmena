import {AuthorApi} from "../shared/sdk/services";

export class AuthorsConfig {

  constructor(private api: AuthorApi) {
    console.log('api', api)
  }

  public icon = 'icon-people';
  public title = 'Authors';

  public fields = [
    'id',
    'domainId',
    'firstName',
    'lastName',
    'username',
    'email',
    'active',
    'created',
    'modified',
  ]

  public form = {
    fields: [
      {name: 'firstName', label: 'First name', type: 'text', placeholder: 'First name'},
      {name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Last name'},
      {name: 'username', label: 'Username', type: 'text', placeholder: 'Username'},
      {name: 'email', label: 'Email', type: 'email', placeholder: 'Email'},
    ]
  };

  public table = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'firstName', label: 'First name', link: './'},
      {field: 'lastName', label: 'Last name', link: './'},
      {field: 'username', label: 'Username'},
      {field: 'email', label: 'Email'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', link: 'remove'},
    ]
  };

}

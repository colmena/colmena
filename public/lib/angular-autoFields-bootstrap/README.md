angular-autofields-bootstrap
=============================

Avoid bloating your templates with repetitive form html.  
Instead, just specify a schema for the form and the model you want to bind it to and you're done!

**NEW!** This project has just been completely revamped to be [more modular](http://justmaier.github.io/angular-autoFields-bootstrap/#extend). You can now use AutoFields without bootstrap!

[**Check out a demo & documentation**](http://justmaier.github.io/angular-autoFields-bootstrap/#demo)

##Installation

####Bower
`bower install angular-autoFields-bootstrap`

####Nuget
`install-package AngularJs.AutoFields.Bootstrap`

####Manually
```html
<script type="text/javascript" src="js/autofields.js"></script>
<!-- with bootstrap -->
<script type="text/javascript" src="js/autofields-bootstrap.js"></script>
```

##Usage

0. If you're doing this manually and using bootstrap, be sure to install [Angular-UI Bootstrap](https://github.com/angular-ui/bootstrap) for date popover support
1. Include the `autofields.js` script provided by this component into your app. If you are using bootstrap, also include `autofields-bootstrap.js`
2. add `autofields` as a module dependency to your app

####Javascript
```javascript
angular.module('app',['autofields'])
.controller('JoinCtrl', ['$scope', function ($scope) {
	$scope.user = {
		username: '',
		password: '',
		confirmPassword: '',
	};

	$scope.schema = [
		{ property: 'username', type: 'text', attr: { ngMinlength: 4, required: true }, msgs: {minlength: 'Needs to have at least 4 characters'} },
		{ property: 'password', type: 'password', attr: { required: true } },
		{ property: 'confirmPassword', label: 'Confirm Password', type: 'password', attr: { confirmPassword: 'user.password', required: true } }
	];

	$scope.join = function(){
		if(!$scope.joinForm.$valid) return;
		//join stuff....
	}
}]);
```

####Html
```html
 <form name="joinForm" ng-submit="join()">
    <auto:fields fields="schema" data="user"></auto:fields>
    <button type="submit" class="btn btn-default btn-lg btn-block" ng-class="{'btn-primary':joinForm.$valid}">Join</button>
</form>
```

##Field Schema

* `property` the data property to bind to
* `type` the type of field. Options include: checkbox, date, select, textarea, any text variation (ie. password, text, email, number)
* `label` the label for the field. If no label is provided it will convert the property name to title case. If you don't want a label, set it's value to ''
* `placeholder` the placeholder for the field. If no placeholder is provided it will use the label. If you don't want a placeholder, set it's value to ''
* `help` a block of help or description text to be displayed beneath the field
* `attr` any additional attributes you would like to have on the object. Camelcase is converted to dash notation. Validation properties can go here.
* `list` the string that goes into ng-options for select fields
* `rows` number of textarea rows (default: 3)
* `columns` number of sm columns a field should span if the type is multiple. If this is applied at the same level as the multiple type, it will apply it to all of it's fields.
* `msgs` validation messages for corresponding validation properties on the field
* `validate` enable/disable validation for the field (default: true)
* `addons` array of addon objects to be included with the input
	* `button` is a button (default: false)
	* `icon` class string for an icon to include, empty or null implies no icon
	* `content` string to be placed in the addon
	* `before` prepend the addon (default: false)

##Options

####Standard
* `classes` object with an array of classes for each element of a field group: container, input, label
* `attributes` object with default attribute-value pairs for each element of a field group: container, input, label
* `displayAttributes` array of attributes that affect field display
* `container` the html for the div the will hold the fields
* `textareaRows` the default amount of rows for a textarea (3)
* `fixUrl` whether or not url type fields should have http:// auto added (true)

####With Validation
* `validation` settings for validation
	* `enabled` enabled/disable validation (enabled by default)
	* `showMessages` enabled/disable validation messages (enabled by default)
	* `defaultMsgs` default validation messages when none is specified in the field schema

####With Bootstrap
* `classes` adds 8 new element class arrays: row, col, colOffset, helpBlock, inputGroup, inputGroupAddon, inputGroupAddonButton, button
* `layout` layout options for the fields
	* `type` form type: `basic | horizontal`
	* `labelSize` how many columns a label should span
	* `inputSize` how many columns an input should span
* `defaultOption` the text for the default select option (Select One)
* `dateSettings` settings for the date fields ([see angular-ui-bootstrap's date picker](http://angular-ui.github.io/bootstrap/#/datepicker))
* `datepickerOptions` settings for the date picker ([see angular-ui-bootstrap's date picker](http://angular-ui.github.io/bootstrap/#/datepicker))

##Extend
AutoFields is now highly extensible allowing developer to easily add new field types and field properties.

###Adding New Field Types
####`$autofieldsProvider.registerHandler(types, handler)`
* `types` a string or array of strings with field types that will be used to map to the handler
* `handler` a function that will be called by AutoFields to create the fields html. AutoFields will pass directive, field, and field index
* `directive` directive properties, options, and elements:
	* `container` the autofields container element
	* `options` the options for the directive
* `field` the field schema currently being processed
* `index` the index of the field in the field schema array

####Example
```javascript
module('autofields.checkbox', ['autofields.core'])
.config(['$autofieldsProvider', function($autofieldsProvider){
	// Checkbox Field Handler
	$autofieldsProvider.registerHandler('checkbox', function(directive, field, index){
		var fieldElements = $autofieldsProvider.field(directive, field, '&lt;input/&gt;');

		if(fieldElements.label) fieldElements.label.prepend(fieldElements.input);

		return fieldElements.fieldContainer;
	});
}]);
```

###Adding New Field Properties
####`$autofieldsProvider.registerMutator(key, mutator, options)`
* `key` something the mutator can be referenced by in require & override requests
* `mutator` called by autofields after the creation of a field element
	* `directive`
		* `container` the autofields container element
		* `options` the options for the directive
	* `field` the field schema currently being processed
	* `fieldElements` an object containing:
		* `fieldContainer` the container element for the field's label and input
		* `label` the label element
		* `input` the input element
		* `validation` whether or not to include validation *requires validation*
		* `msgs` an array of possible error messages *requires validation*
		* `validMsg` a field's valid message *requires validation*

####Example
```javascript
module('autofields.helpblock', ['autofields.core'])
.config(['$autofieldsProvider', function($autofieldsProvider){
	// Help Block Propert Support
	$autofieldsProvider.registerMutator('helpBlock', function(directive, field, fieldElements){
		if(!field.help) return fieldElements;
		
		fieldElements.helpBlock = angular.element('&lt;p/&gt;');
		fieldElements.helpBlock.addClass(directive.options.classes.helpBlock.join(' '))
		fieldElements.helpBlock.html(field.help);
		fieldElements.fieldContainer.append(fieldElements.helpBlock);

		return fieldElements;
	});
}]);
```

##Notes
* It shares the scope of it's parent so that it can access the data on the scope
* To make it work on IE8, just add a [polyfill for Array.isArray()](https://developer.mozilla.org/fr/docs/JavaScript/Reference/Global_Objects/Array/isArray)

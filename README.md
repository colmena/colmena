# LoopBack-aNGular-BootStrap

This is my Sandbox-project to play around connecting a
[Loopback API](http://loopback.io) to an [AngularJS](https://angularjs.org/)
gui which is spiced up by [Bootstrap](http://getbootstrap.com/).

The name of the project is totally uninspired but I figured it does say what
it beholds of. I'm open to suggestions for a better name.

## Goal

My goal is to have a starter project which can be used to quickly build an API
with a frontend that are easily extendable.

## Features

- A Loopback REST API with authentication enabled built on the [Loopback Generator](https://www.npmjs.org/package/generator-loopback)
- A GUI built with AngularJS based on the [Angular Generator](https://github.com/yeoman/generator-angular)
- Angular UI-Router
- JSON-based based forms by [angular-formly](https://github.com/nimbly/angular-formly)
- Notifications by [angular-toasty](https://github.com/Salakar/angular-toasty)
- File upload with [Loopback storage services](https://github.com/strongloop/loopback-component-storage/)
- Admin themplate powered by [SB-Admin](http://startbootstrap.com/template-overviews/sb-admin/)

### TODO:

- Social authentication based on Passport.
- Detect if API is online

## Installation

### Dependencies

Installation depends on `node`/`npm` with `grunt` and `bower` installed globally.

### Checkout this project:

    git clone https://github.com/beeman/lb-ng-bs.git

### Install the Node packages:

    npm install

### Install the Bower packages:

    bower install

### Run a test to see if all is well:

    grunt

### Clone, install and run in a oneliner

    git clone https://github.com/beeman/lb-ng-bs.git && cd lb-ng-bs && npm install && bower install && grunt && npm start & grunt serve

## Running

The project is separated in a server and a client.


### Server

To run the server you issue the command:

    npm start

Or to run it with nodemon (needs `nodemon` installed globally). This will
automatically restart the server when you change its code:

    npm run dev

### Client

To run the client you issue the command:

    grunt serve

It will open the project in your default browser with livereload enabled.
This will take care of reloading the page when you change your code.


## Development

For development you'd want to look into [yeoman](http://yeoman.io).

The API is built with [generator-loopback](https://www.npmjs.org/package/generator-loopback).

The GUI is built with [generator-angular](https://www.npmjs.org/package/generator-angular).

These should help you quickly add code to your project. Further details tailored to this project might follow in the future.

If you have any problems please [contact me](https://github.com/beeman/lb-ng-bs/issues).

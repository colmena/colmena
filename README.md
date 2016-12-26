# Colmena CMS

> Free and Open Source API and Admin

#### TPFKALAA

This is a complete rewrite of The Project Formerly Known As Loopback Angular Admin.

## Warning

#### This software is under 'active' development!
#### Please do not use it in production as-is.

## About

Colmena CMS is a starter kit for an API with an Admin interface that can be easily extended and built upon.

#### Components

It is built using a collection of great Open Source projects, including but not limited to:

- [LoopBack](https://loopback.io/) `v2.x` - API server based on Express.
- [Angular](https://angular.io/) `v2.x` - MVC framework to build web apps.
- [Fireloop](http://fireloop.io/) - Awesome Real-Time integration of Loopback and Angular.
- [CoreUI](http://coreui.io/) - Amazing Bootstrap Admin Template.

## Installation

The project consists of 2 components, the API and the Admin interface.

#### Requirements

This project is built with node and therefore `node` (v6.x) and `npm` (v3.x) need to be available on your machine.

Additionally it uses [p-s](https://github.com/kentcdodds/p-s) to run the project, which is recommended to be installed 
globally:

    $ npm i -g p-s

#### Clone repo

First clone the repository to get the project files:

    $ git clone https://github.com/beeman/colmena-cms.git
    $ cd colmena-cms

### API

From inside the project dir (`colmena-cms`) enter the `api` directory and run `npm install`:

    $ cd api
    $ npm install

### Admin

From inside the project dir (`colmena-cms`) enter the `admin` directory and run `npm install`:

    $ cd admin
    $ npm install

## Development

Currently there is now way to build the project, it can only be run in development mode.

### Running in development mode

From inside the project dir (`colmena-cms`) run `nps dev`:

    $ nps dev

This will start the API and the Admin in the same terminal.

- The API listens on [http://0.0.0.0:3000](http://0.0.0.0:3000).
- The Admin listens on [http://0.0.0.0:9000](http://0.0.0.0:9000).

You can also start the two components separately:

#### Start the API

    $ cd api
    $ nps dev

#### Start the Admin

    $ cd admin
    $ nps dev

### More commands

For a list of all the commands available run `nps` in the project dir or in one of the components.

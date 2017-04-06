![](admin/src/assets/logo.png?raw=true)

# Colmena CMS

> Free and Open Source API and Admin powered by LoopBack and Angular

[![All Contributors](https://img.shields.io/badge/all_contributors-24-orange.svg?style=flat-square)](#contributors) [![](https://colmena-slack.now.sh/badge.svg)](https://colmena-slack.now.sh/) [![OpenCollective](https://opencollective.com/colmena-cms/backers/badge.svg)](#backers) [![OpenCollective](https://opencollective.com/colmena-cms/sponsors/badge.svg)](#sponsors)

#### TPFKALAA

This is a complete rewrite of The Project Formerly Known As Loopback Angular Admin.

## Warning

#### This software is under 'active' development!
#### Please do not use it in production as-is.
#### Please refer to the [Work in Progress](#work-in-progress) section to find out what needs to be implemented to be production ready

## About

Colmena CMS is a starter kit for an API with an Admin interface that can be easily extended and built upon.

#### Components

It is built using a collection of great Open Source projects, including but not limited to:

- [LoopBack](https://loopback.io/) `v2.x` - API server based on Express.
- [Angular](https://angular.io/) `v4.x +` - MVC framework to build web apps.
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

    $ git clone https://github.com/colmena/colmena-cms
    $ cd colmena-cms

### Top-level directory

From inside the project dir (`colmena-cms`) run `npm install`:

    $ npm install
    
This command should also trigger running `npm install` in the API and Admin directories using the `npm postinstall` step.

### API (manual install of dependencies)

From inside the project dir (`colmena-cms`) enter the `api` directory and run `npm install`:

    $ cd api
    $ npm install

### Admin (manual install of dependencies)

From inside the project dir (`colmena-cms`) enter the `admin` directory and run `npm install`:

    $ cd admin
    $ npm install

## Development

Currently there is now way to build the project, it can only be run in development mode.

### Running in development mode

From inside the project dir (`colmena-cms`) run `INITDB=1 nps dev`:

    $ INITDB=1 nps dev

This will start the API and the Admin in the same terminal, and by using `INITDB=1` the sample data will be loaded.

- The API listens on [http://0.0.0.0:3000](http://0.0.0.0:3000).
- The Admin listens on [http://0.0.0.0:9000](http://0.0.0.0:9000).

You can also start the two components separately:

#### Start the API

    $ cd api
    $ nps dev

#### Start the Admin

    $ cd admin
    $ nps dev

### Running on other host than localhost

By default the development stack assumes that the API and Admin are both started on localhost (using `0.0.0.0`).

When this is not the case, the admin needs to know on which IP address it can reach the API. In order to do this, you
need to specify the `api.baseUrl` config property, which you can control using the `API_BASE_URL` environment variable.

    $ API_BASE_URL=http://192.168.12.34:3000 nps dev

> Make sure to leave out the trailing slash in the `API_BASE_URL` variable.

You should now be able to connect to the Admin on http://192.168.12.34:9000 and it should connect to the API.

### More commands

For a list of all the commands available run `nps` in the project dir or in one of the components.

## Work in Progress

Colmena CMS is still a work in progress and not all functionality is built yet.

- Almost no ACLS are implemented, this means that the API can be used by whoever has access to it
- There is no advanced user management
- The interface does not reflect the user role (admin/manager/user)
- Content will be leaking across domains, while this should not be possible

## Known issues


### npm WARN [dependency] requires a peer of @angular/[package] but none was installed.

*This is a warning and can be safely ignored.*
 
The reason this warning is shown is because Colmena CMS Admin uses Angular 4.x but depends on a couple of packages that 
expect Angular 2.x. This will be resolved when the dependencies are going to support Angular 4.

### The `<template>` element is deprecated. Use `<ng-template>` instead

*This is a warning and can be safely ignored.*

In Angular 4 `<template>` got deprecated in favor of `<ng-template>`. While Colmena CMS Admin has upgraded, most of its
dependencies still use `<template>`. This will be resolved when the dependencies are going to update this.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/36491?v=3" width="100px;"/><br /><sub>Bram Borggreve</sub>](http://colmena.io/)<br />💬 [🐛](https://github.com/colmena/colmena-cms/issues?q=author%3Abeeman) [💻](https://github.com/colmena/colmena-cms/commits?author=beeman) 🎨 [📖](https://github.com/colmena/colmena-cms/commits?author=beeman) 🔧 | [<img src="https://avatars.githubusercontent.com/u/1755489?v=3" width="100px;"/><br /><sub>Willian Ribeiro Angelo</sub>](https://github.com/movibe)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=movibe) | [<img src="https://avatars.githubusercontent.com/u/977025?v=3" width="100px;"/><br /><sub>Nick Portokallidis</sub>](http://nporto.com)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=portokallidis) | [<img src="https://avatars.githubusercontent.com/u/90312?v=3" width="100px;"/><br /><sub>drmikecrowe</sub>](https://github.com/drmikecrowe)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=drmikecrowe) | [<img src="https://avatars.githubusercontent.com/u/1899626?v=3" width="100px;"/><br /><sub>Vladimir Mechkauskas</sub>](http://elartix.com/)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=elartix) | [<img src="https://avatars.githubusercontent.com/u/4164460?v=3" width="100px;"/><br /><sub>Bernardo Arevalo</sub>](https://github.com/nardoguy14)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=nardoguy14) | [<img src="https://avatars.githubusercontent.com/u/8195533?v=3" width="100px;"/><br /><sub>yieme</sub>](https://github.com/yieme)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=yieme) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/339169?v=3" width="100px;"/><br /><sub>Brian McIntyre</sub>](https://github.com/bmcintyre)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=bmcintyre) | [<img src="https://avatars.githubusercontent.com/u/274358?v=3" width="100px;"/><br /><sub>Rob Halff</sub>](https://github.com/rhalff)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=rhalff) | [<img src="https://avatars.githubusercontent.com/u/3543429?v=3" width="100px;"/><br /><sub>Asgeir Birkisson</sub>](https://github.com/asgeirbirkis)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=asgeirbirkis) | [<img src="https://avatars.githubusercontent.com/u/6855743?v=3" width="100px;"/><br /><sub>dthib</sub>](https://github.com/dthib)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=dthib) | [<img src="https://avatars.githubusercontent.com/u/3319777?v=3" width="100px;"/><br /><sub>Oleh Kukil</sub>](http://brainstorage.me/flashbag)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=flashbag) | [<img src="https://avatars.githubusercontent.com/u/821963?v=3" width="100px;"/><br /><sub>Pulkit Singhal</sub>](http://pulkitsinghal.blogspot.com)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=pulkitsinghal) | [<img src="https://avatars.githubusercontent.com/u/1904924?v=3" width="100px;"/><br /><sub>Tuan PM</sub>](http://tuanpm.net)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=tuanpmt) |
| [<img src="https://avatars.githubusercontent.com/u/314539?v=3" width="100px;"/><br /><sub>brownman</sub>](http://brownman.github.io)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=brownman) | [<img src="https://avatars.githubusercontent.com/u/8570291?v=3" width="100px;"/><br /><sub>Hoàng Phúc</sub>](https://github.com/hoangtrongphuc)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=hoangtrongphuc) | [<img src="https://avatars.githubusercontent.com/u/175838?v=3" width="100px;"/><br /><sub>Brian Dunnette</sub>](http://brian.dunnette.us)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=bdunnette) | [<img src="https://avatars.githubusercontent.com/u/4792828?v=3" width="100px;"/><br /><sub>Chenzc</sub>](https://github.com/Chenzc)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=Chenzc) | [<img src="https://avatars.githubusercontent.com/u/6417718?v=3" width="100px;"/><br /><sub>Tersius Kuhne</sub>](https://github.com/ktersius)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=ktersius) | [<img src="https://avatars.githubusercontent.com/u/1888261?v=3" width="100px;"/><br /><sub>Alex Quiambao</sub>](https://github.com/silverbux)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=silverbux) | [<img src="https://avatars.githubusercontent.com/u/791137?v=3" width="100px;"/><br /><sub>José Luis Di Biase</sub>](http://www.camba.coop)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=josx) |
| [<img src="https://avatars.githubusercontent.com/u/5630513?v=3" width="100px;"/><br /><sub>Shing.</sub>](https://github.com/yshing)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=yshing) | [<img src="https://avatars.githubusercontent.com/u/67973?v=3" width="100px;"/><br /><sub>Alex Wilde</sub>](alexthewilde.github.io)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=alexthewilde) | [<img src="https://avatars.githubusercontent.com/u/529030?v=3" width="100px;"/><br /><sub>dmtw</sub>](https://github.com/dmtw)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=dmtw) |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/colmena-cms#backer)]

<a href="https://opencollective.com/colmena-cms/backer/0/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/1/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/2/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/3/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/4/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/5/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/6/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/7/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/8/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/9/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/10/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/11/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/12/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/13/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/14/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/15/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/16/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/17/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/18/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/19/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/20/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/21/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/22/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/23/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/24/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/25/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/26/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/27/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/28/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/backer/29/website" target="_blank"><img src="https://opencollective.com/colmena-cms/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/colmena-cms#sponsor)]

<a href="https://opencollective.com/colmena-cms/sponsor/0/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/1/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/2/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/3/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/4/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/5/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/6/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/7/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/8/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/9/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/10/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/11/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/12/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/13/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/14/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/15/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/16/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/17/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/18/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/19/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/20/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/21/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/22/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/23/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/24/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/25/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/26/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/27/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/28/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/colmena-cms/sponsor/29/website" target="_blank"><img src="https://opencollective.com/colmena-cms/sponsor/29/avatar.svg"></a>

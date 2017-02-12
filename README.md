![](admin/src/assets/logo.png?raw=true)

# Colmena CMS

> Free and Open Source API and Admin powered by LoopBack and Angular

[![All Contributors](https://img.shields.io/badge/all_contributors-23-orange.svg?style=flat-square)](#contributors) [![](https://colmena-cms.now.sh/badge.svg)](https://colmena-cms.now.sh/)

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

    $ git clone git@github.com:beeman/loopback-angular-admin.git colmena-cms
    $ cd colmena-cms
    $ git checkout -b colmena-cms origin/colmena-cms
    $ git branch -d master

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/36491?v=3" width="100px;"/><br /><sub>Bram Borggreve</sub>](http://colmena.io/)<br />💬 [🐛](https://github.com/colmena/colmena-cms/issues?q=author%3Abeeman) [💻](https://github.com/colmena/colmena-cms/commits?author=beeman) 🎨 [📖](https://github.com/colmena/colmena-cms/commits?author=beeman) 🔧 | [<img src="https://avatars.githubusercontent.com/u/1755489?v=3" width="100px;"/><br /><sub>Willian Ribeiro Angelo</sub>](https://github.com/movibe)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=movibe) | [<img src="https://avatars.githubusercontent.com/u/977025?v=3" width="100px;"/><br /><sub>Nick Portokallidis</sub>](http://nporto.com)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=portokallidis) | [<img src="https://avatars.githubusercontent.com/u/90312?v=3" width="100px;"/><br /><sub>drmikecrowe</sub>](https://github.com/drmikecrowe)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=drmikecrowe) | [<img src="https://avatars.githubusercontent.com/u/1899626?v=3" width="100px;"/><br /><sub>Vladimir Mechkauskas</sub>](http://elartix.com/)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=elartix) | [<img src="https://avatars.githubusercontent.com/u/4164460?v=3" width="100px;"/><br /><sub>Bernardo Arevalo</sub>](https://github.com/nardoguy14)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=nardoguy14) | [<img src="https://avatars.githubusercontent.com/u/8195533?v=3" width="100px;"/><br /><sub>yieme</sub>](https://github.com/yieme)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=yieme) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/339169?v=3" width="100px;"/><br /><sub>Brian McIntyre</sub>](https://github.com/bmcintyre)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=bmcintyre) | [<img src="https://avatars.githubusercontent.com/u/274358?v=3" width="100px;"/><br /><sub>Rob Halff</sub>](https://github.com/rhalff)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=rhalff) | [<img src="https://avatars.githubusercontent.com/u/3543429?v=3" width="100px;"/><br /><sub>Asgeir Birkisson</sub>](https://github.com/asgeirbirkis)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=asgeirbirkis) | [<img src="https://avatars.githubusercontent.com/u/6855743?v=3" width="100px;"/><br /><sub>dthib</sub>](https://github.com/dthib)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=dthib) | [<img src="https://avatars.githubusercontent.com/u/3319777?v=3" width="100px;"/><br /><sub>Oleh Kukil</sub>](http://brainstorage.me/flashbag)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=flashbag) | [<img src="https://avatars.githubusercontent.com/u/821963?v=3" width="100px;"/><br /><sub>Pulkit Singhal</sub>](http://pulkitsinghal.blogspot.com)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=pulkitsinghal) | [<img src="https://avatars.githubusercontent.com/u/1904924?v=3" width="100px;"/><br /><sub>Tuan PM</sub>](http://tuanpm.net)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=tuanpmt) |
| [<img src="https://avatars.githubusercontent.com/u/314539?v=3" width="100px;"/><br /><sub>brownman</sub>](http://brownman.github.io)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=brownman) | [<img src="https://avatars.githubusercontent.com/u/8570291?v=3" width="100px;"/><br /><sub>Hoàng Phúc</sub>](https://github.com/hoangtrongphuc)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=hoangtrongphuc) | [<img src="https://avatars.githubusercontent.com/u/175838?v=3" width="100px;"/><br /><sub>Brian Dunnette</sub>](http://brian.dunnette.us)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=bdunnette) | [<img src="https://avatars.githubusercontent.com/u/4792828?v=3" width="100px;"/><br /><sub>Chenzc</sub>](https://github.com/Chenzc)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=Chenzc) | [<img src="https://avatars.githubusercontent.com/u/6417718?v=3" width="100px;"/><br /><sub>Tersius Kuhne</sub>](https://github.com/ktersius)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=ktersius) | [<img src="https://avatars.githubusercontent.com/u/1888261?v=3" width="100px;"/><br /><sub>Alex Quiambao</sub>](https://github.com/silverbux)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=silverbux) | [<img src="https://avatars.githubusercontent.com/u/791137?v=3" width="100px;"/><br /><sub>José Luis Di Biase</sub>](http://www.camba.coop)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=josx) |
| [<img src="https://avatars.githubusercontent.com/u/5630513?v=3" width="100px;"/><br /><sub>Shing.</sub>](https://github.com/yshing)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=yshing) | [<img src="https://avatars.githubusercontent.com/u/67973?v=3" width="100px;"/><br /><sub>Alex Wilde</sub>](alexthewilde.github.io)<br />[💻](https://github.com/colmena/colmena-cms/commits?author=alexthewilde) |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

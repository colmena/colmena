'use strict';

const config = require('config')
module.exports = function(File) {

  File.prototype.getContainerUrl = function () {
    return [ config.get('api.url'), 'Containers', this.container, 'download', this.name ].join('/')
  };

  File.observe('loaded', (ctx, next) => {
    if (typeof ctx.instance === 'undefined') {
      return next()
    }
    ctx.instance.url = ctx.instance.getContainerUrl();
    next();
  });

};

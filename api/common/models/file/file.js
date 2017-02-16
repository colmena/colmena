'use strict';

module.exports = function(File) {

  File.prototype.getContainerUrl = function () {
    return [ File.app.settings.restApiRoot, 'Containers', this.container, 'download', this.name ].join('/');
  };

  File.observe('loaded', (ctx, next) => {
    if (typeof ctx.instance === 'undefined') {
      return next()
    }
    ctx.instance.url = ctx.instance.getContainerUrl();
    next();
  });

};

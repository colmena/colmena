'use strict';

var path = require('path');

module.exports = function(app) {

  var ds = app.loopback.createDataSource({
    connector: require('loopback-component-storage'),
    provider: 'filesystem',
    root: path.join(__dirname, '../', '../', 'storage')
  });
  var container = ds.createModel('container');

  app.model(container);

};

'use strict';

var Showdown = require('showdown');

module.exports = function (Page) {

  var converter = new Showdown.converter();

  Page.html = function (id, cb) {
    Page.findById(id, function (err, page) {
      if (err) {
        return cb(err);
      }
      var result = page;
      result.html = converter.makeHtml(page.content);
      cb(err, result);
    });
  };

  Page.remoteMethod('html', {
    accepts: {arg: 'id', type: 'string'},
    returns: {arg: 'content', type: 'string'},
    http: {path: '/html', verb: 'get'}
  });

};

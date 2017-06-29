'use strict'
const Promise = require('bluebird')

module.exports = (app, cb) =>
  app.models.SystemDomain
    .find()
    .then(domains => Promise.each(domains, domain => domain.init()))
    .asCallback(cb)

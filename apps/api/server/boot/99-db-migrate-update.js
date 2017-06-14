'use strict'
const config = require('config')
const log = require('@colmena/logger')

const { dbMigrate, dbUpdate } = require('@colmena/api-helpers')

module.exports = function(app, cb) {

  // Check if there is user configured Settings
  if (!config.has('system.initdb') || config.get('system.initdb') === false) {
    log.info('[sample-data] skipping sample data')
    return true
  }

  return Promise.resolve()
    .then(() => dbMigrate(app.dataSources.db))
    .then(() => dbUpdate(app.dataSources.db))
    .then(() => cb())
    .catch(err => cb(err))

}

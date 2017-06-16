'use strict'
const config = require('config')
const log = require('@colmena/logger')

const { dbMigrate, dbUpdate } = require('@colmena/api-helpers')

module.exports = function(app, cb) {

  // Check if there is user configured Settings
  if (!config.has('system.migratedb') || config.get('system.migratedb') === false) {
    log.cyan.d('[db-migrate] skipping database migration (migratedb = false)')
    return cb()
  }

  return Promise.resolve()
    .then(() => dbMigrate(app.dataSources.db))
    .then(() => dbUpdate(app.dataSources.db))
    .then(() => cb())
    .catch(err => cb(err))

}

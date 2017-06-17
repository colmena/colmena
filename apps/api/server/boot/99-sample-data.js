'use strict'
const config = require('config')
const log = require('@colmena/logger')

const { importSampleData, importSampleFiles } = require('@colmena/api-helpers')

module.exports = function(app, cb) {
  // Check if there is user configured Settings
  if (!config.has('system.initdb') || config.get('system.initdb') === false) {
    log.cyan.d('[sample-data] skipping sample data (initdb = false)')
    return cb()
  }

  return Promise.resolve()
    .then(() => importSampleData(app))
    .then(() => importSampleFiles(app))
    .then(() => cb())
    .catch(err => cb(err))
}

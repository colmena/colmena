'use strict'

const loopback = require('loopback')
const boot = require('loopback-boot')

const config = require('config')
const log = require('@colmena/logger')
const packageJson = require('../package.json')

log.green.b(`Starting ${packageJson.name} ${packageJson.version}`) // eslint-disable-line

if (!config.has('hideBootWarning') || config.get('hideBootWarning') === false) {
  require('./bootwarning')
}

const app = (module.exports = loopback())

app.start = function() {
  // start the web server
  const server = app.listen(function() {
    app.emit('started', server)
    const baseUrl = app.get('url').replace(/\/$/, '')
    log.yellow.b(`Colmena API listening at: ${baseUrl}`)
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath
      log.yellow.b(`Colmena API Explorer: ${baseUrl}${explorerPath}`)
    }
  })
  return server
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start()
  }
})

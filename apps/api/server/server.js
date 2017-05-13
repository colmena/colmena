'use strict'

const loopback = require('loopback')
const boot = require('loopback-boot')

const log = require('@colmena/logger')

const app = module.exports = loopback()

app.start = function () {
  // start the web server
  const server = app.listen(function () {
    app.emit('started', server)
    const baseUrl = app.get('url').replace(/\/$/, '')
    log.info('Colmena API listening at: %s', baseUrl)
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath
      log.info('Colmena API Explorer: %s%s', baseUrl, explorerPath)
    }
  })
  return server
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start()
  }
})

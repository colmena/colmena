'use strict'

const loopback = require('loopback')
const boot = require('loopback-boot')

const config = require('config')
const log = require('@colmena/logger')
const packageJson = require('../package.json')

log.green.b(`Starting ${packageJson.name} ${packageJson.version}`) // eslint-disable-line

if (!config.has('hideBootWarning') || config.get('hideBootWarning') === false) {
  log.yellow.b(`--------------------------------------------------------------------------------------`) // eslint-disable-line
  log.yellow.b(`| Colmena is currently being developed and this means that things will break.        |`) // eslint-disable-line
  log.yellow.b(`|                                                                                    |`) // eslint-disable-line
  log.yellow.b(`| In case of any issues first try: 'npm run clean' followed by 'npm install'.        |`) // eslint-disable-line
  log.yellow.b(`| After changing internal dependencies run 'lerna bootstrap' correctly link them.    |`) // eslint-disable-line
  log.yellow.b(`| After changing the API structure run 'npm run sdk' to re-generate the Angular SDK. |`) // eslint-disable-line
  log.yellow.b(`|                                                                                    |`) // eslint-disable-line
  log.yellow.b(`| Join our Slack for support if the issues persist: http://colmena-slack.now.sh/     |`) // eslint-disable-line
  log.yellow.b(`--------------------------------------------------------------------------------------`) // eslint-disable-line
  log.yellow.d(`To disable this warning set 'hideBootWarning: true' in apps/api/config/local.yaml `) // eslint-disable-line
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

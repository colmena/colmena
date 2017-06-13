'use strict'
const config = require('config')
const log = require('@colmena/logger')
const Promise = require('bluebird')

module.exports = function(app) {
  // Check if there is user configured Settings
  if (!config.has('system.initdb') || config.get('system.initdb') === false) {
    log.info('System init db: skipping sample data')
    return true
  }

  const Container = app.models.Container
  const SystemDomain = app.models.SystemDomain

  function removeContainer() {
    return Container.destroy('default')
  }

  function importImages() {
    return SystemDomain.findById('default').then(res =>
      Promise.all([
        res.importFileByUrl(
          'http://images.freeimages.com/images/previews/a4d/pencils-texture-1150153.jpg',
          'pencils.jpg'
        ),
        res.importFileByUrl(
          'http://images.freeimages.com/images/previews/496/dj-night-1-1150471.jpg',
          'dj-night.jpg'
        ),
      ])
    )
  }

  app.once('booted', () => {
    // return Promise.resolve()
    //   .then(() => removeContainer())
    //   .then(() => importImages())
    //   .then(() => log.info('System init db: loaded sample data.'))
    //   .catch(err => Promise.reject(err))
  })
}

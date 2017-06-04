'use strict'
const config = require('config')
const log = require('@colmena/logger')
const Promise = require('bluebird')

module.exports = function(app) {
  // Check if there is user configured Settings
  if (!config.has('system.initdb') || config.get('system.initdb') === false) {
    log.info('System init db: skipping sample data')
    return Promise.resolve()
  }

  const Container = app.models.Container
  const Domain = app.models.Domain
  const Fixtures = app.models.Fixtures

  function setupFixtures() {
    return new Promise((resolve, reject) =>
      Fixtures.setupFixtures((err, res) => {
        if (err) {
          console.log(err)
          return reject(err)
        }
        return resolve(res)
      })
    )
  }

  function teardownFixtures() {
    return new Promise((resolve, reject) =>
      Fixtures.teardownFixtures((err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    )
  }

  function removeContainer() {
    return Container.destroy('default')
  }

  function importImages() {
    return Domain.findById('default').then(res =>
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

  return Promise.resolve()
    .then(() => removeContainer())
    .then(() => teardownFixtures())
    .then(() => setupFixtures())
    .then(() => importImages())
    .then(() => log.info('System init db: loaded sample data.'))
    // .then(() => cb())
    // .catch(err => cb(err))
}

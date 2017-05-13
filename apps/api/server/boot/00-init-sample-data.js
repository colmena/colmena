'use strict'
const config = require('config')
const Promise = require('bluebird')

module.exports = function (app, cb) {

  // Check if there is user configured Settings
  if (!config.has('system.initdb') || config.get('system.initdb') === false) {
    console.log('System init db: skipping sample data')
    return cb()
  }

  const Container = app.models.Container
  const Domain = app.models.Domain
  const Fixtures = app.models.Fixtures

  function setupFixtures() {
    return new Promise((resolve, reject) => Fixtures.setupFixtures((err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    }));
  }

  function teardownFixtures() {
    return new Promise((resolve, reject) => Fixtures.teardownFixtures((err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    }));
  }

  function removeContainer() {
    return Container.destroy('default')
  }

  function importImages() {
    return Domain.findById('default')
      .then(res => Promise.all([
        res.importFileByUrl('http://images.freeimages.com/images/previews/a4d/pencils-texture-1150153.jpg', 'pencils.jpg'),
        res.importFileByUrl('http://images.freeimages.com/images/previews/496/dj-night-1-1150471.jpg', 'dj-night.jpg'),
      ])
    )
  }

  return Promise.resolve()
    .then(() => removeContainer())
    .then(() => teardownFixtures())
    .then(() => setupFixtures())
    .then(() => importImages())
    .then(() => console.log('System init db: loaded sample data.'))
    .then(() => cb())
    .catch(err => cb(err))

}

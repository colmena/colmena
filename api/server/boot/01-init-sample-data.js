'use strict'
const config = require('config')

module.exports = function (app, cb) {

  // Check if there is user configured Settings
  if (!config.has('system.initdb') || config.get('system.initdb') === false) {
    console.log('System init db: skipping sample data')
    return cb()
  }

  return app.models.Fixtures
    .setupFixtures((err, res) => {
      if (err) {
        return cb(err)
      }
      console.log('System init db: loaded sample data: ' + res)
      return cb()
    })

}

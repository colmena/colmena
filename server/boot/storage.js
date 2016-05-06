'use strict'
import path from 'path'

module.exports = function(app) {

  const ds = app.loopback.createDataSource({
    connector: require('loopback-component-storage'),
    provider: 'filesystem',
    root: path.join(__dirname, '../', '../', 'storage')
  })
  const container = ds.createModel('container')

  app.model(container)

}

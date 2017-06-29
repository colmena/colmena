'use strict'

const { getAppConfigs } = require('@colmena/api-helpers')

module.exports = function(Core) {
  Core.ping = () => Core.app.models.Ping.ping()

  Core.datasources = () => {
    const dataSources = Core.app.dataSources
    const dataSourceKeys = Object.keys(dataSources)
    const result = {}

    dataSourceKeys.forEach(dataSourceKey => {
      result[dataSourceKey.toLowerCase()] = dataSources[dataSourceKey].settings
    })
    return Promise.resolve(result)
  }

  Core.modules = () => Promise.resolve(getAppConfigs())
  // This is a static method that lives on the Core model
  Core.echo = value => Promise.resolve(value)

  // We defined the remote method on the module to make it available over REST
  Core.remoteMethod('echo', {
    accepts: { arg: 'value', type: 'string' },
    returns: { arg: 'result', type: 'string' },
    http: {
      path: '/echo',
      verb: 'get',
    },
  })
}

'use strict'
const _ = require('lodash')
const { getAppConfigs } = require('@colmena/api-helpers')

module.exports = function(Core) {
  Core.getDomains = () =>
    Core.app.models.SystemDomain.find().map(domain => ({
      id: domain.id,
      name: domain.name,
      description: domain.description,
    }))

  Core.getSettings = () =>
    Core.app.models.SystemSetting
      .find({
        where: { system: true, public: true },
      })
      .map(setting => ({
        key: setting.key,
        value: setting.value,
      }))

  Core.ping = () => Core.app.models.Ping.ping()

  Core.getDatasources = () => {
    const modelNames = Object.keys(Core.app.models)


    const result = {}


    modelNames.forEach(modelName => {
      const Model = Core.app.models[modelName]

      const dsName = _.get(Model, 'dataSource.settings.name')
      if (dsName) {
        result[dsName] = Model.dataSource.settings
      }
    })

    const dataSources = Core.app.dataSources
    const dataSourceKeys = Object.keys(dataSources)
    // const result = {}

    dataSourceKeys.forEach(dataSourceKey => {
      result[dataSourceKey.toLowerCase()] = dataSources[dataSourceKey].settings
    })
    return Promise.resolve(result)
  }

  Core.getModules = () => Promise.resolve(getAppConfigs())
}

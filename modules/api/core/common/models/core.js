'use strict'
const { get } = require('lodash')
const { getAppConfigs } = require('@colmena/api-helpers')

module.exports = function(Core) {
  Core.ping = () => Core.app.models.Ping.ping()

  Core.getModules = () => Promise.resolve(getAppConfigs())

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

  Core.getDatasources = () => {
    const modelNames = Object.keys(Core.app.models)
    const dataSources = {}

    modelNames.map(name => {
      const Model = Core.app.models[name]
      const dsName = get(Model, 'dataSource.settings.name')

      if (dsName) {
        dataSources[dsName] = Model.dataSource.settings
      }
    })

    return Promise.resolve(dataSources)
  }
}

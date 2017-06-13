const { getAppConfigs, getSampleDataSets } = require('../../lib/loopback-apps')
const log = require('@colmena/logger')

module.exports = function(app) {

  const loadModelData = (modelName, data) => app.models[modelName]
    .create(data, (err, res) => {
      if (err) {
        log.error(`${modelName}: Error importing sample data`)
        log.info(err)
        return
      }
      log.info(`[sample-data ${modelName}: Imported ${res.length} items`)
    })

  app.once('booted', () => {
    getAppConfigs()
      .forEach(cfg => {
        if (!cfg.sampleData) {
          return true
        }
        getSampleDataSets(cfg).forEach(dataSet => {
          Object.keys(dataSet).forEach(modelName => loadModelData(modelName, dataSet[modelName]))
        })
      })
  })
};

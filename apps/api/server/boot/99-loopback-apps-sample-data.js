const { getAppConfigs, getSampleDataSets } = require('../../lib/loopback-apps')

module.exports = function(app) {

  const loadModelData = (modelName, data) => app.models[modelName]
    .create(data, (err, res) => {
      if (err) {
        console.error(`${modelName}: Error importing sample data`)
        console.log(err)
        return
      }
      console.log(`${modelName}: Imported ${res.length} items`)
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

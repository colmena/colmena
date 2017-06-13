const pJson = require('../package.json')

const colmena = pJson.colmena || {
  apps: []
}

const getApps = () => (colmena.apps || [])

const getAppConfigs = () => getApps().map(app => require(app))

const getSampleDataSets = (cfg) => {
  const appName = cfg.name
  const sampleData = []

  cfg.sampleData.forEach(dataSet => {
    const dataSetData = require(`${appName}/${dataSet}`)

    sampleData.push(dataSetData)
  })

  return sampleData
}


module.exports = {
  getApps,
  getAppConfigs,
  getSampleDataSets,
}

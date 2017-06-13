const { getApps } = require('../lib/loopback-apps')

let config = require('./model-config.base.json')

const getModelPath = (packageName, path) => `../node_modules/${packageName}/${path}`

getApps()
  .forEach(appName => {
    const app = require(appName)
    console.log(`Registering models from module: ${appName}`)

    if (app.models) {
      config = Object.assign(config, app.models)
    }
    if (app.modelSources) {
      config['_meta']['sources'] = [
        ...config['_meta']['sources'],
        ...app.modelSources.map(item => getModelPath(appName, item)),
      ]
    }
    if (app.mixinSources) {
      config['_meta']['mixins'] = [
        ...config['_meta']['mixins'],
        ...app.mixinSources.map(item => getModelPath(appName, item)),
      ]
    }
  })

module.exports = config

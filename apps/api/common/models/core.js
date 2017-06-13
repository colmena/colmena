const { getAppConfigs } = require('../../lib/loopback-apps')

module.exports = function contentModel(Core) {

  Core.getModules = () => {
    const { name, version, colmena } = require('../../package.json')

    return Promise.resolve(getAppConfigs())
  }
}

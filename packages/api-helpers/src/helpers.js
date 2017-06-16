const prequire = require('parent-require')
const config = require('config')
const path = require('path')

const log = require('@colmena/logger')

const getModuleList = () => config.get('colmena.modules')
const getActiveModules = () => Object.keys(getModuleList()).filter(module => getModuleList()[module])
const getModules = () => getActiveModules()

/**
 * Clear all data.
 *
 * @return {Promise} Returns a promise that resolves once all data has been removed.
 */
const dbMigrate = db => {
  log.gray('[db-migrate] Starting')
  return db.automigrate()
    .then(() => log.gray('[db-migrate] Finished'))
    .catch(err => {
      log.red.b('[db-migrate] Failed', err)
      throw err
    })
}

/**
 * Update database schemas.
 *
 * @return {Promise} Returns a promise that resolves once the database schema has been updated.
 */
const dbUpdate = db => {
  log.gray('[db-update] Starting')
  return db.autoupdate()
    .then(() => log.gray('[db-update] Finished'))
    .catch(err => {
      log.red.b('[db-update] Failed', err)
      throw err
    })
}


const loadModulePath = (moduleName, file) => path.join(moduleName, file);

const loadParentModule = moduleName => prequire(moduleName);

const loadModules = config => {

  getModules()
    .forEach(moduleName => {

      const module = loadParentModule(moduleName)
      log.white.b(`[loopback-modules] Registering models from module: ${moduleName}`)

      if (module.models) {
        config = Object.assign(config, module.models)
      }

      if (module.modelSources) {
        config['_meta']['sources'] = [
          ...config['_meta']['sources'],
          ...module.modelSources.map(item => loadModulePath(moduleName, item)),
        ]
      }
      if (module.mixinSources) {
        config['_meta']['mixins'] = [
          ...config['_meta']['mixins'],
          ...module.mixinSources.map(item => loadModulePath(moduleName, item)),
        ]
      }
    })

  return config
}



module.exports = {
  dbMigrate,
  dbUpdate,
  getModules,
  loadModules,
}

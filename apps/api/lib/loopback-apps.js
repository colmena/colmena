const Promise = require('bluebird')
const config = require('config')

const log = require('@colmena/logger')

const getModuleList = () => config.get('colmena.modules')
const getActiveModules = () => Object.keys(getModuleList()).filter(module => getModuleList()[module])
const getModules = () => getActiveModules()

const getAppConfigs = () => getModules().map(app => require(app))

const getDomain = (app, domain) => app.models.SystemDomain.findById('default')

const getAppFileList = prop => getAppConfigs()
  .filter(app => app[prop])
  .map(app => app[prop].map(file => `${app.name}/${file}`))
  .reduce((res, item) => res.concat(item), [])

const importSampleFileSet = (app, set) => Promise.all(
  Object.keys(set).map(domainName => {
    const files = set[domainName]
    log.gray('[sample-files]', `${files.length} files for domain`, domainName)

    return getDomain(app, domainName)
      .then(domain => files.forEach(file => domain
        .importFileByUrl(file.url, file.fileName)
        .then(() => log.gray('[sample-files]', `${domainName} import ${file.url}`))
      ))
  })
)

const importSampleDataSet = (app, set) => Promise.all(Object.keys(set)
  .map(modelName => app.models[modelName]
    .create(set[modelName])
    .then(res => log.gray('[sample-data]', `${res.length} items for model`, modelName))
  )
)

const importSampleData = (app) => Promise.resolve(getAppFileList('sampleData'))
  .then(items => items.map(item => require(item)))
  .then(sets => Promise.each(sets, set => importSampleDataSet(app, set)))

const importSampleFiles = (app) => Promise.resolve(getAppFileList('sampleFiles'))
  .then(items => items.map(item => require(item)))
  .then(sets => Promise.each(sets, set => importSampleFileSet(app, set)))

module.exports = {
  getModules,
  getAppConfigs,
  importSampleData,
  importSampleFiles,
}

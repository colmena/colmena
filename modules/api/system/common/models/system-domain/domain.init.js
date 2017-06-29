'use strict'
const _ = require('lodash')
const log = require('@colmena/logger')

const settingSummary = (arr, { group, key, value }) =>
  _.set(arr, group + '.' + key, value)

module.exports = function(SystemDomain) {
  SystemDomain.prototype.init = function() {
    log.info(`Initialize domain ${this.id}`)

    this.settingsMap = {}

    return this.initSettings()
      .then(settingsMap => (this.settingsMap = settingsMap))
      .then(() => this.initStorage())
  }

  SystemDomain.prototype.initSettings = function() {
    log.info(`Initialize settings ${this.id}`)
    return this.settings.getAsync().reduce(settingSummary, {})
  }

  SystemDomain.prototype.storageContainerName = function() {
    return `StorageContainer${_.startCase(this.id)}`
  }

  SystemDomain.prototype.storageDsName = function() {
    return `storage${_.startCase(this.id)}`
  }

  SystemDomain.prototype.initStorage = function() {
    const modelName = this.storageContainerName()
    const dsName = this.storageDsName()

    log.info(
      `Domain [${this.id}] storage container ${modelName} on ds ${dsName}`
    )

    const status = { message: '' }
    const storage = _.get(this.settingsMap, 'storage', { provider: false })

    const config = {
      name: dsName,
      connector: 'loopback-component-storage',
      provider: storage.provider,
      debug: true,
    }

    switch (storage.provider) {
      case 'filesystem':
        status.message = `Enable storage provider ${storage.provider}`
        config.root = storage.root
        break
      case 'amazon':
        status.message = `Enable storage provider ${storage.provider}`
        break
      default:
        status.message = 'Cannot find storage provider ${storage.provider}'
    }

    const ds = SystemDomain.app.loopback.createDataSource(dsName, config)

    const description = `Storage Container for domain ${this.id}.`

    log.debug(`Creating ${description}`)

    const Model = ds.define(
      modelName,
      {},
      {
        public: false,
        name: modelName,
        plural: modelName,
        base: 'StorageContainer',
        description,
        settings: {
          container: storage.container,
        },
      }
    )

    SystemDomain.app.model(Model, { dataSource: ds, public: false })

    ds.connect(() => {})

    ds.on('connected', () => {
      this.getFiles().then(files => console.log('files', files.length))
    })
  }

  SystemDomain.prototype.getFiles = function() {
    const ContainerModel = SystemDomain.app.models[this.storageContainerName()]
    const containerName = ContainerModel.settings.settings.container

    return new Promise(resolve =>
      ContainerModel.getFiles(containerName, (err, res) => resolve(res))
    )
  }

  SystemDomain.remoteMethod('prototype.getFiles', {
    returns: { arg: 'result', type: 'array', root: true },
    http: { path: '/getFiles', verb: 'get' },
  })
}

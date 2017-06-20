'use strict'

const { getAppConfigs } = require('@colmena/api-helpers')

module.exports = function(System) {
  System.ping = () => System.app.models.Ping.ping()

  System.modules = () => Promise.resolve(getAppConfigs())
}

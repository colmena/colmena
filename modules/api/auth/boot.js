'use strict'

const debug = require('debug')('colmena:auth')
const log = require('@colmena/logger')
const config = require('config')

const providers = require('./provider')

const PassportConfigurator = require('loopback-component-passport')
  .PassportConfigurator

const getProviders = () =>
  config.has('auth') && config.has('auth.providers')
    ? config.get('auth.providers')
    : {}

const getConfig = (name, data) =>
  providers[name]
    ? providers[name](name, data)
    : { error: `Can't find provider definition for ${name}` }

const getConfigs = providers =>
  Object.keys(providers)
    .filter(p => providers[p].enabled)
    .map(p => getConfig(p, providers[p]))

module.exports = function(app) {
  const passportConfigurator = new PassportConfigurator(app)
  passportConfigurator.init()

  const configs = getConfigs(getProviders())

  configs.forEach(provider => {
    log.magenta.b(`[auth-provider] Registering provider ${provider.name}`)
    debug(provider)
    passportConfigurator.configureProvider(provider.name, provider)
  })
}

'use strict'

const config = require('config')
const log = require('@colmena/logger')
const loopback = require('loopback')
const cookieParser = require('cookie-parser')
const session = require('express-session')

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
  app.middleware('session:before', cookieParser('secretsecret'))
  app.middleware(
    'session',
    session({
      secret: 'kitty',
      saveUninitialized: true,
      resave: true,
    })
  )

  const passportConfigurator = new PassportConfigurator(app)
  passportConfigurator.init()

  passportConfigurator.setupModels({
    userModel: app.models.SystemUser,
    userIdentityModel: app.models.AuthIdentity,
    userCredentialModel: app.models.AuthCredential,
  })

  const configs = getConfigs(getProviders())

  configs.map(provider => {
    log.blue.b(`[auth-provider] Registering provider ${provider.name}`)
    passportConfigurator.configureProvider(provider.name, provider)

    return app.models.SystemSetting.upsert({
      key: `auth.providers.${provider.name}`,
      value: true,
      system: false,
      type: 'boolean',
    })
  })
}

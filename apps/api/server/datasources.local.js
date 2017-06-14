'use strict'
const config = require('config')
const log = require('@colmena/logger')

const datasources = {}

if (config.has('mongodb') && config.get('mongodb.url')) {
  log.info('[data-sources] Using MongoDB config', config.get('mongodb'))
  datasources['db'] = {
    name: 'db',
    connector: 'mongodb',
    url: config.get('mongodb.url'),
  }
}

if (config.has('smtp') && config.get('smtp.host') && config.get('smtp.port')) {
  log.info('[data-sources] Using SMTP config:', config.get('smtp'))
  datasources['mail'] = {
    connector: 'mail',
    transports: [
      {
        type: 'smtp',
        host: config.get('smtp.host'),
        port: config.get('smtp.port'),
      },
    ],
  }
}

module.exports = datasources

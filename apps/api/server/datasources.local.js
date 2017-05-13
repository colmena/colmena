'use strict'
const config = require('config')
const log = require('@colmena/logger')

if (config.has('mongodb') && config.get('mongodb.url')) {
  log.info('Data sources: Using MongoDB config', config.get('mongodb'))
  module.exports = {
    db: {
      name: 'db',
      connector: 'mongodb',
      url: config.get('mongodb.url'),
    },
  }
}

if (config.has('smtp') && config.get('smtp.host') && config.get('smtp.port')) {
  log.info('Data sources: Using SMTP config:', config.get('smtp'))
  module.exports = {
    mail: {
      connector: 'mail',
      transports: [
        {
          type: 'smtp',
          host: config.get('smtp.host'),
          port: config.get('smtp.port'),
        },
      ],
    },
  }
}

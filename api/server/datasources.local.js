'use strict'
const config = require('config')

if (config.has('mongodb') && config.get('mongodb.url')) {
  console.log('Data sources: Using MongoDB config', config.get('mongodb'))
  module.exports = {
    db: {
      name: 'db',
      connector: 'mongodb',
      url: config.get('mongodb.url'),
    },
  }
}

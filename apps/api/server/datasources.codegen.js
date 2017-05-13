'use strict'

const _ = require('lodash')
const path = require('path')

const datasourcesDefault = require(path.join(__dirname, 'datasources.json'))
const datasources = {}

// re-route all datasources to the memory connector.
Object.keys(datasourcesDefault).forEach(key => {
  _.set(datasources, `${key}.connector`, 'memory')
})

module.exports = datasources

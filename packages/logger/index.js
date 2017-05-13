const bunyan = require('bunyan')
const bunyanFormat = require('bunyan-format')

const name = process.env.API_LOG_NAME || 'colmena'
const level = process.env.API_LOG_LEVEL || 'debug'

const streams = []

streams.push({
  level,
  stream: bunyanFormat({ outputMode: 'short' }),
})

const log = bunyan.createLogger({
  name,
  streams,
})

module.exports = log

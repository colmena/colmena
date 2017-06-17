const bunyan = require('bunyan')
const bunyanFormat = require('bunyan-format')

const chalk = require('chalk')
chalk.enabled = true

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

const colors = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
]

colors.forEach(
  color => (log[color] = (...str) => log.info(chalk[color](...str)))
)
colors.forEach(
  color => (log[color].b = (...str) => log.info(chalk[color].bold(...str)))
)
colors.forEach(
  color => (log[color].d = (...str) => log.info(chalk[color].dim(...str)))
)

module.exports = log

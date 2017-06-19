const config = require('config')

module.exports = {
  host: config.get('api.host'),
  port: config.get('api.port'),
}

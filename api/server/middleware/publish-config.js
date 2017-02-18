const config = require('config')

function createConfig() {
  const result = {
    baseUrl: config.get('api.baseUrl'),
    version: config.get('api.version'),
    url: config.get('api.url'),
    nodeEnv: process.env.NODE_ENV || 'development',
  }

  return `window.apiConfig = ${JSON.stringify(result)}`
}

module.exports = function configMiddleware() {
  return (req, res) => {
    res.header('Content-Type', 'application/javascript')
    res.send(createConfig())
  }
}

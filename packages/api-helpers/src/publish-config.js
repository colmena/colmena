const config = require('config')

function createConfig() {
  const result = {
    nodeEnv: process.env.NODE_ENV || 'development',
    baseUrl: config.get('api.baseUrl'),
    version: config.get('api.version'),
  }

  result.url = [result.baseUrl.replace(/\/$/, ''), result.version].join('/')

  return `window.apiConfig = ${JSON.stringify(result)}`
}

module.exports = function configMiddleware() {
  return (req, res) => {
    res.header('Content-Type', 'application/javascript')
    res.send(createConfig())
  }
}

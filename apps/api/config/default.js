var defer = require('config/defer').deferConfig;

module.exports = {
  api: {
    url: defer((cfg) => (`${cfg.api.baseUrl.replace(/\/$/, '')}/${cfg.api.version}`)),
  },
}

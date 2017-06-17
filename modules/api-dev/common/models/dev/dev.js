'use strict'

module.exports = function(Dev) {
  Dev.echo = value => Promise.resolve(value)

  Dev.remoteMethod('echo', {
    accepts: { arg: 'value', type: 'string' },
    returns: { arg: 'result', type: 'string' },
  })
}

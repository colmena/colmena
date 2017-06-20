'use strict'

module.exports = function(Auth) {
  // This is a static method that lives on the Auth model
  Auth.echo = value => Promise.resolve(value)

  // We defined the remote method on the module to make it available over REST
  Auth.remoteMethod('echo', {
    accepts: { arg: 'value', type: 'string' },
    returns: { arg: 'result', type: 'string' },
  })
}

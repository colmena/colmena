'use strict'

module.exports = function(Forms) {
  // This is a static method that lives on the Forms model
  Forms.echo = value => Promise.resolve(value)

  // We defined the remote method on the module to make it available over REST
  Forms.remoteMethod('echo', {
    accepts: { arg: 'value', type: 'string' },
    returns: { arg: 'result', type: 'string' },
  })
}

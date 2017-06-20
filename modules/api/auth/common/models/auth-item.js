'use strict'

module.exports = function(AuthItem) {
  // Helper method that gives us the summary
  const summary = item => ({ name: item.name, description: item.description })

  // We define a method on the prototype that will live on each instance of a AuthItem
  AuthItem.prototype.summary = function() {

    // A remote method needs to resolve or reject a Promise
    // The argument `this` we pass into the method is the AuthItem instance
    return Promise.resolve(summary(this))
  }

  // We defined the remote method on the module to make it available over REST
  AuthItem.remoteMethod('prototype.summary', {
    description: 'Return the summary of an item',
    returns: { arg: 'result', type: 'object', root: true },
  })
}

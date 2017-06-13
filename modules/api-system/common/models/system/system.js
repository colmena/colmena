'use strict';

module.exports = function(System) {

  System.ping = () => System.app.models.Ping.ping()

  System.modules = () => System.app.models.Core.getModules()

}

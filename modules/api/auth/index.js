const { name, version, colmena } = require('./package.json')

module.exports = Object.assign({ name, version }, colmena.module)

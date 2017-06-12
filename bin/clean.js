#!/usr/bin/env node
const { clean, pJoin } = require('./lib/functions')

const pJson = require('../package.json')
const packageName = '@colmena/colmena'
const projectPath = pJoin(__dirname, '..')

if (!pJson || !pJson.name || pJson.name !== packageName) {
  return console.log(`Could not find the ${packageName} project`)
}
console.log(`[clean] Removing node_modules from project path ${projectPath}`)

clean(projectPath)

console.log('[clean] Done.')

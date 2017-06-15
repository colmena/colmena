#!/usr/bin/env node

process.env.INITDB = true
process.env.MIGRATEDB = true

const app = require('../server/server')

app.on('booted', process.exit)

#!/usr/bin/env node

process.env.INITDB = true
process.env.MIGRATEDB = true

require('../server/server').on('booted', process.exit)

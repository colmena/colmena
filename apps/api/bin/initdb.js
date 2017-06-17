#!/usr/bin/env node

process.env.INITDB = true
process.env.MIGRATEDB = true

const exit = delay =>
  setTimeout(() => {
    console.log('[initdb] done')
    process.exit()
  }, delay * 1000)

const booted = () => {
  console.log('[initdb] waiting 5 seconds for images to be download!')
  exit(5)
}

require('../server/server').on('booted', booted)

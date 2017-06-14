
const log = require('@colmena/logger')


/**
 * Clear all data.
 *
 * @return {Promise} Returns a promise that resolves once all data has been removed.
 */
const dbMigrate = db => {
  log.info('[db-migrate] Starting')
  return db.automigrate()
    .then(() => log.info('[db-migrate] Finished'))
    .catch(err => {
      log.error('[db-migrate] Failed', err)
      throw err
    })
}

/**
 * Update database schemas.
 *
 * @return {Promise} Returns a promise that resolves once the database schema has been updated.
 */
const dbUpdate = db => {
  log.info('[db-update] Starting')
  return db.autoupdate()
    .then(() => log.info('[db-update] Finished'))
    .catch(err => {
      log.error('[db-update] Failed', err)
      throw err
    })
}


module.exports = {
  dbMigrate,
  dbUpdate,
}

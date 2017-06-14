
const log = require('@colmena/logger')


/**
 * Clear all data.
 *
 * @return {Promise} Returns a promise that resolves once all data has been removed.
 */
const dbMigrate = db => {
  log.gray('[db-migrate] Starting')
  return db.automigrate()
    .then(() => log.gray('[db-migrate] Finished'))
    .catch(err => {
      log.red.b('[db-migrate] Failed', err)
      throw err
    })
}

/**
 * Update database schemas.
 *
 * @return {Promise} Returns a promise that resolves once the database schema has been updated.
 */
const dbUpdate = db => {
  log.gray('[db-update] Starting')
  return db.autoupdate()
    .then(() => log.gray('[db-update] Finished'))
    .catch(err => {
      log.red.b('[db-update] Failed', err)
      throw err
    })
}


module.exports = {
  dbMigrate,
  dbUpdate,
}

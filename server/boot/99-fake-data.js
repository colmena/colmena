'use strict'

const log = require('debug')('boot:99-fake.data')
const faker = require('faker')
const Promise = require('bluebird')

module.exports = function (app) {

  if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
    return
  }

  const promises = []

  const structure = {
    Post: {
      count: 15,
    },
    Event: {
      count: 15,
    },
    Note: {
      count: 15,
    },
    Page: {
      count: 15,
    },
  }

  if (app.dataSources.db.connected) {
    createFakeData()
  } else {
    app.dataSources.db.once('connected', createFakeData)
  }

  function createFakeData () {
    for (let model in structure) {
      const options = structure[model]
      log('Creating %s items for model %s', options.count, model)
      for (let i = 0; i < options.count; i++) {
        promises.push(app.models[model].createFakeData(faker))
      }
    }
  }

  Promise.all(promises).then(() => {
    log('Creating fake data done!')
  }).catch()

}

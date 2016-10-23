const Promise = require('bluebird')

module.exports = function (app, cb) {

  const nodeEnv = process.env.NODE_ENV;

  if (!nodeEnv && nodeEnv !== 'development') {
    console.log('init-dummy-data: ignoring import: NODE_ENV is not set or is not set to development');
    return cb();
  }

  const domainId = 'example.com';

  const recipe = {
    Domain: [ {
      templateModel: 'Domain',
      templateFn: 'exampleCom',
    } ],
    Product: [ {
      templateModel: 'Product',
      templateFn: 'basic',
      amount: 20,
    } ],
    Author: [ {
      templateModel: 'Author',
      templateFn: 'basic',
      amount: 5,
    } ],
    Post: [ {
      templateModel: 'Post',
      templateFn: 'basic',
      amount: 40,
    } ],
    Event: [ {
      templateModel: 'Event',
      templateFn: 'basic',
      amount: 15,
    } ],
    // Note: [
    //   {
    //     templateModel: 'Note',
    //     templateFn: 'defaultNote',
    //     amount: 20,
    //   },
    // ],
    // Event: [
    //   {
    //     templateModel: 'Event',
    //     templateFn: 'defaultEvent',
    //     amount: 20,
    //   },
    // ],
  }

  const modelNames = Object.keys(recipe)
  const promises = []

  modelNames.forEach(modelName => {
    const Model = app.models[modelName]

    recipe[modelName].forEach(dummyModel => {
      const amount = dummyModel.amount || 1
      for (let i = 0; i < amount; i++) {
        const templateModel = dummyModel.templateModel || 'Template'
        const templateFn = dummyModel.templateFn
        const dummy = app.models[templateModel]._templates()[templateFn]

        promises.push(Model.create(dummy(domainId)))
      }
    })
  })

  return Promise
    .all(promises)
    .then(res => console.log('%s dummy models created', res.length))
    .then(cb)
    .catch(cb)
}

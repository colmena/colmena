'use strict';

module.exports = function(app, cb) {
  const nodeEnv = process.env.NODE_ENV;

  if (!nodeEnv && nodeEnv !== 'development') {
    console.log('init-sample-data: ignoring import: NODE_ENV is not set or is not set to development');
    return cb();
  }

  const sampleData = require(`../sample-data/${nodeEnv}.json`);
  const sampleModels = Object.keys(sampleData);

  sampleModels.forEach(modelName => {
    if (!app.models[modelName]) {
      console.log(`init-sample-data: Model ${modelName} is unknown`);
      return cb();
    }

    app.models[modelName]
      .create(sampleData[modelName])
      .then(res => console.log('Created', res))
      .catch(err => console.error(err));
  });

  return cb();
};

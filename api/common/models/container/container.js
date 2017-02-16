'use strict';
const Promise = require('bluebird')

module.exports = function(Container) {

  Container.afterRemote('upload', function(ctx, modelInstance,  next) {
    const fileInfo = modelInstance.result.files.files[0];
    const metaData = {
      id: fileInfo.container + '-' + fileInfo.name,
      name: fileInfo.name,
      type: fileInfo.type,
      size: fileInfo.size,
      container: fileInfo.container,
    };
    Container.app.models.File
      .upsert(metaData)
      .then(() => next())
      .catch(err => next(err))
  });

  // Promisified wrapper function to find or create a container by name
  Container.findOrCreate = function findOrCreate(name) {
    return new Promise((resolve, reject) => {
      // Retrieve the container by name
      Container.getContainer(name, (err, container) => {
        if (err) {
          // If we can not retrieve it, try to create it
          console.info(`Container does not exist, creating container ${name}`)

          return Container.createContainer({ name }, (err, newContainer) => {
            if (err) {
              // Something went wrong creating the container
              console.error(`Error creating container ${name}`, err)
              return reject(err)
            }
            // Return the created container
            return resolve(newContainer)
          })
        }
        // Return the existing container
        return resolve(container)
      })
    })
  }

  // Promisified wrapper function to destroy a container by name
  Container.destroy = function destroy(name) {
    return new Promise((resolve, reject) => {
      // Retrieve the container by name
      Container.getContainer(name, (err, container) => {
        if (err) {
          // If we can not retrieve it, do nothing
          console.info(`Container does not exist, not destroying container ${name}`)
          // Return the existing container
          return resolve(true)
        }

        return Container.destroyContainer(name, (err, res) => {
          if (err) {
            // Something went wrong creating the container
            console.error(`Error destroying container ${name}`, err)
            return reject(err)
          }
          // Return confirmation
          return resolve(res)
        })
      })
    })
  }

};

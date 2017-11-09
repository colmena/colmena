'use strict'
const Promise = require('bluebird')
const log = require('@colmena/logger')
const request = require('request')

module.exports = function(Container) {
  Container.afterRemote('upload', (ctx, modelInstance) => {
    const fileInfo = modelInstance.result.files.file[0]
    const metaData = {
      id: `${fileInfo.container}-${fileInfo.name}`,
      name: fileInfo.name,
      type: fileInfo.type,
      size: fileInfo.size,
      container: fileInfo.container,
    }

    return Container.app.models.StorageFile.upsert(metaData)
  })

  // Promisified wrapper function to find or create a container by name
  Container.findOrCreate = function findOrCreate(name) {
    return new Promise((resolve, reject) => {
      // Retrieve the container by name
      Container.getContainer(name, (err, container) => {
        if (err) {
          // If we can not retrieve it, try to create it
          log.info(`Container does not exist, creating container ${name}`)

          return Container.createContainer({ name }, (err, newContainer) => {
            if (err) {
              // Something went wrong creating the container
              log.error(`Error creating container ${name}`, err)
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
      Container.getContainer(name, err => {
        if (err) {
          // If we can not retrieve it, do nothing
          log.info(`Container does not exist, not destroying container ${name}`)
          // Return the existing container
          return resolve(true)
        }

        return Container.destroyContainer(name, (err, res) => {
          if (err) {
            // Something went wrong creating the container
            log.error(`Error destroying container ${name}`, err)
            return reject(err)
          }
          // Return confirmation
          return resolve(res)
        })
      })
    })
  }

  // Promisified wrapper function to destroy a file from a container by name
  Container.deleteFile = function deleteFile(containerName, fileName) {
    return new Promise((resolve, reject) => {
      // Retrieve the container by name
      Container.getFile(containerName, fileName, err => {
        if (err) {
          // If we can not retrieve it, do nothing
          log.info(
            `File ${fileName} does not exist in container ${containerName} , skipping file deletion`
          )
          // Return the existing container
          return resolve(true)
        }

        return Container.removeFile(containerName, fileName, (err, res) => {
          if (err) {
            // Something went wrong creating the container
            log.error(
              `Error destroying file ${fileName} from container ${containerName}`,
              err
            )
            return reject(err)
          }
          // Return confirmation
          return resolve(res)
        })
      })
    })
  }

  /**
   * Import an image form a URL, rename it and add a reference to a model
   *
   * @param {String} url The URL to download the file from
   * @param {String} containerName The storage container to download the file to
   * @param {String} fileName The name of the file to download the file to
   */
  Container.importUrl = function importUrl(
    url,
    containerName,
    fileName = null
  ) {
    return new Promise((resolve, reject) => {
      // Sanitize image url
      url = url.replace(/^\s+|\s+$/g, '')

      // Create the name of the image based on the filename, model and instanceId
      const urlParts = url.split('/')

      // Get the filename from the URL if it's not passed as parameter
      if (!fileName) {
        fileName = `${urlParts[urlParts.length - 1]}`
      }

      const metaData = {
        id: `${containerName}-${fileName}`,
        name: fileName,
        container: containerName,
      }

      // Create a Writable stream to upload to
      const stream = Container.uploadStream(containerName, fileName)

      // Create the request
      const req = request.get(url)

      // Catch the response
      req.on('response', data => {
        metaData.type = data.headers['content-type']
        metaData.size = data.headers['content-length']
      })

      // Create the pipe
      const pipe = req.pipe(stream)

      // Return errors to the client.
      pipe.on('error', error => reject(error))

      // Create the File instance after the download completes
      pipe.on('finish', () =>
        Container.app.models.StorageFile
          .upsert(metaData)
          .then(() => resolve(metaData))
          .catch(err => Promise.reject(err))
      )
    })
  }
}

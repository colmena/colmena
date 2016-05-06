'use strict'

const Showdown = require('showdown')

module.exports = function (Page) {

  Page.createFakeData = (faker) => {
    const name = faker.company.catchPhrase()
    const slug = faker.helpers.slugify(name)
    return Page.create({
      id: slug,
      name: name,
      slug: slug,
      content: ` > ${faker.lorem.paragraph()}`,
    })
  }

  const converter = new Showdown.converter() // eslint-disable-line new-cap

  Page.html = (id, cb) => {
    Page.findById(id, (err, page) => {
      if (err) {
        return cb(err)
      }
      const result = page
      result.html = converter.makeHtml(page.content)
      cb(err, result)
    })
  }

  Page.remoteMethod('html', {
    accepts: {
      arg: 'id',
      type: 'string',
    },
    returns: {
      arg: 'content',
      type: 'string',
    },
    http: {
      path: '/:id/html',
      verb: 'get',
    },
  })

}

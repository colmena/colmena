'use strict'
const crypto = require('crypto')

const getHash = str => crypto.createHash('md5').update(str).digest('hex')
const getGravatarUrl = email =>
  `http://www.gravatar.com/avatar/${getHash(email)}?s=120`

module.exports = function(SystemUser) {
  SystemUser.getAvatarUrl = item => getGravatarUrl(item.email)

  SystemUser.getFullName = item => `${item.firstName} ${item.lastName}`

  SystemUser.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance && !ctx.instance.username && ctx.instance.email) {
      ctx.instance.username = ctx.instance.email
    }
    next()
  })
}

'use strict'

const { getGravatarUrl } = require('@colmena/api-helpers/src/gravatar')

module.exports = function (SystemUser) {
  SystemUser.getAvatarUrl = item =>
    item.avatar ? item.avatar : getGravatarUrl(item.email)

  SystemUser.getFullName = item => `${item.firstName} ${item.lastName}`
}

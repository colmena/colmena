const crypto = require('crypto')

const getHash = str => crypto.createHash('md5').update(str).digest('hex')

const gravatarUrl = 'http://www.gravatar.com/avatar/'
const gravatarSize = 150

const getGravatarUrl = (email = '') => `${gravatarUrl}${getHash(email)}?s=${gravatarSize}`

module.exports = { getGravatarUrl }

'use strict';
const crypto = require('crypto');

module.exports = function(SystemUser) {

  SystemUser.getAvatarUrl = (item) => {
    const hash = crypto.createHash('md5').update(item.email).digest("hex")
    return `http://www.gravatar.com/avatar/${hash}?s=120`
  }
};

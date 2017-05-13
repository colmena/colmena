'use strict'
const path = require('path')
const templateHelper = require('../../../server/modules/template-helper')

module.exports = function modelFnProduct(UserModel) {

  // Helper to get the template path
  function getTemplatePath (templateName) {
    return path.join(__dirname, 'templates', templateName)
  }

  UserModel._templates = () => ({
    passwordResetHtml: (params) => templateHelper.parse(getTemplatePath('password-reset.html'), params),
    passwordResetText: (params) => templateHelper.parse(getTemplatePath('password-reset.txt'), params),
  })

}

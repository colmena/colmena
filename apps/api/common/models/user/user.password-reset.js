'use strict'

const Promise = require('bluebird')
const config = require('config')
const log = require('@colmena/logger')

module.exports = function userPasswordReset(User) {

  const getDomainById = id => User.app.models.Domain.findById(id)

  const getBaseRecoverUrl = () => config.get('admin.url').replace(/\/$/, '') + config.get('admin.recoverPath')

  const getResetPasswordUrl = token => `${getBaseRecoverUrl()}?token=${token}`

  const sendEmail = message => new Promise((resolve, reject) => {
    log.info(`sendEmail:`, message)
    return User.app.models.Email.send(message, (err, result) => err ? reject(err) : resolve(result))
  })

  const getMailVars = (ctx, domain) => ({
    firstName: ctx.user.firstName,
    resetPasswordUrl: getResetPasswordUrl(ctx.accessToken.id),
    domainName: domain.name,
    domainEmail: domain.email,
  })

  const getMessage = (ctx, domain) => ({
    to: `"${ctx.user.fullName()}" <${ctx.email}>`,
    from: domain.email,
    subject: `Reset your ${domain.name} password`,
    html: User._template_passwordResetHtml()(getMailVars(ctx, domain)),
    text: User._template_passwordResetText()(getMailVars(ctx, domain)),
  })

  /**
   * user: Password reset wrapped to ensure that no data is leaked.
   */
  const _resetPassword = User.resetPassword

  User.resetPassword = (options) => _resetPassword.call(User, options, err => {
    // Return all errors except for EMAIL_NOT_FOUND
    (err && err.code !== 'EMAIL_NOT_FOUND') ? Promise.reject(err) : Promise.resolve()
  })

  User.sendPasswordResetMessage = ctx => getDomainById(ctx.user.realm || 'default')
    .then(domain => sendEmail(getMessage(ctx, domain)))
    .catch(err => {
      log.error('User.sendPasswordResetMessage: Email.send failure:', err)
      return Promise.reject(err)
    })

  // Wrapping sendPasswordResetMessage instead of using `bind` ensures that our test spies will work.
  User.on('resetPasswordRequest', (...args) =>
    User.sendPasswordResetMessage(...args).catch(() => {
      // Squelching error because the LB call chain is not equipped to deal with it,
      // but we still desire the error to be available for other callers of sendPasswordResetMessage.
    })
  )

  /**
   * Helper method to update the password based on token
   * @param req HTTP Request
   * @param res HTTP Response
   * @returns {Promise.<*>}
   */
  User.doPasswordReset = function doPasswordReset(req, res) {
    // Verify an access token is passed in
    if (!req.accessToken) {
      const err = new Error('No access token provided')

      err.statusCode = 404
      return Promise.reject(err)
    }

    // Verify passwords match
    if (
      !req.body.password ||
      !req.body.verify ||
      req.body.password !== req.body.verify
    ) {
      const err = new Error('Passwords do not match')

      err.statusCode = 401
      return Promise.reject(err)
    }

    return User.findById(req.accessToken.userId, (err, user) => {
      if (err) {
        const err = new Error('User could not be found')

        err.statusCode = 404
        return Promise.reject(err)
      }

      return user.updateAttribute('password', req.body.password, err => {
        if (err) {
          const err = new Error('Error updating password')

          err.statusCode = 404
          return Promise.reject(err)
        }

        return res.json({status: 'success'})
      })
    })
  }
}

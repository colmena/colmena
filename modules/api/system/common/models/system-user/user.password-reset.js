'use strict'

const Promise = require('bluebird')
const config = require('config')
const log = require('@colmena/logger')

module.exports = function userPasswordReset(User) {
  /**
   * user: Password reset wrapped to ensure that no data is leaked.
   */
  const _resetPassword = User.resetPassword

  User.resetPassword = function resetPassword(options, cb) {
    log.info(`User.resetPassword: request password: %j`, options)
    return _resetPassword.call(User, options, err => {
      // Limit the information we reveal.
      if (err && err.code !== 'EMAIL_NOT_FOUND') {
        return cb(err)
      }
      if (err && err.code === 'EMAIL_NOT_FOUND') {
        log.info(`User.resetPassword: EMAIL_NOT_FOUND: %j`, options)
      }
      return cb()
    })
  }

  User.sendPasswordResetMessage = function sendPasswordResetMessage(ctx) {
    // We first retrieve the domain based on the realm to get the reply-to email and name
    if (ctx.user.realm === undefined || ctx.user.realm === null) {
      ctx.user.realm = 'default'
    }
    return User.app.models.SystemDomain
      .findById(ctx.user.realm)
      .then(domain => {
        // This is the access token we will send to the user
        const accessToken = ctx.accessToken.id
        // This is the frontend URL that has the password reset dialog
        const baseUrl =
          config.get('admin.url').replace(/\/$/, '') +
          config.get('admin.recoverPath')
        const resetPasswordUrl = `${baseUrl}?token=${accessToken}`

        // These variables are passed into the password reset mails
        const mailVars = {
          firstName: ctx.user.firstName,
          resetPasswordUrl,
          domainName: domain.name,
          domainEmail: domain.email,
        }

        // This is the message that is composed
        const message = {
          to: `"${ctx.user.fullName}" <${ctx.email}>`,
          from: domain.email,
          subject: `Reset your ${domain.name} password`,
          html: User._template_passwordResetHtml()(mailVars),
          text: User._template_passwordResetText()(mailVars),
        }

        log.info(`User.sendPasswordResetMessage:`, message)
        return User.app.models.Email.send(message, (err, result) => {
          if (err) {
            log.error('User.sendPasswordResetMessage: Email.send failure:', err)
            return Promise.reject(err)
          }
          return Promise.resolve(result)
        })
      })
      .catch(err => Promise.reject(err))
  }

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

        return res.json({ status: 'success' })
      })
    })
  }


  User.afterRemote('setPassword', function (ctx, inst, next) {
    // Invalidate the password-reset token after user\'s password changed
    User.logout(ctx.req.accessToken.id, next)
  });
}

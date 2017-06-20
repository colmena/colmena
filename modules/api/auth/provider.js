const defaults = {
  successRedirect: '/auth/account',
  failureRedirect: '/login',
  failureFlash: true,
}

const paths = provider => ({
  authPath: `/auth/${provider}`,
  callbackURL: `/auth/${provider}/callback`,
  callbackPath: `/auth/${provider}/callback`,
})

const googleLogin = (name, data) => {
  const provider = 'google'

  return Object.assign({}, defaults, paths(provider), {
    name,
    provider,
    module: 'passport-google-oauth',
    strategy: 'OAuth2Strategy',
    scope: ['email', 'profile'],
    clientID: data.clientID || 'PLEASE SET CLIENT ID',
    clientSecret: data.clientSecret || 'PLEASE SET CLIENT SECRET',
  })
}

const twitterLogin = (name, data) => {
  const provider = 'twitter'

  return Object.assign({}, defaults, paths(provider), {
    name,
    provider,
    module: 'passport-twitter',
    authScheme: 'oauth',
    consumerKey: data.consumerKey || 'PLEASE CONFIGURE CONSUMER KEY',
    consumerSecret: data.consumerSecret || 'PLEASE CONFIGURE CONSUMER SECRET',
  })
}

module.exports = {
  googleLogin,
  twitterLogin,
}

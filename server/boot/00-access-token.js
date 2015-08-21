module.exports = function (app) {

  if (process.env.NODE_ENV !== 'production' && process.env.DEV_ACCESS_TOKEN !== undefined) {
    var defaultToken = {
      id: process.env.DEV_ACCESS_TOKEN || new Date().getTime(),
      userId: 1
    };
    app.models.AccessToken.create(defaultToken).then(function (res) {
      console.log('[DEV_ACCESS_TOKEN] Adding AccessToken: %s', res.id);
    }).catch(function (err) {
      console.log(err);
    });
  }

};

module.exports = function(user) {

  user.beforeCreate = function(next, user) {
    if (user.username == undefined) {
      user.username = user.email;
    }
    user.status = 'created';
    user.created = Date.now();
    next();
  };


};

module.exports = function(AppModel) {

  AppModel.beforeCreate = function(next, instance) {
    instance.created = instance.modified = Date.now();
    next();
  };

  AppModel.beforeUpdate = function(next, instance) {
    instance.modified = Date.now();
    next();
  };

};

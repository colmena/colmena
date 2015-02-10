module.exports = function(AppModel) {

  AppModel.beforeCreate = function(next, instance) {
    console.log('create');
    instance.created = instance.modified = Date.now();
    next();
  };

  AppModel.beforeUpdate = function(next, instance) {
    console.log('update');
    instance.modified = Date.now();
    next();
  };

};

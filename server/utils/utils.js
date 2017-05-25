'use strict'

module.exports.setMethodsVisibility = function (Model, methods) {
  methods = methods || [];
  Model.sharedClass.methods().forEach(function (method) {
    method.shared = methods.indexOf(method.name) > -1;
  });
};

module.exports.showMethodsVisibility = function (Model) {
  Model.sharedClass.methods().forEach(function (method) {
    console.log(method.name + " : " + method.shared)
  });
};


'use strict';

const utils = require('../utils/utils')

module.exports = function(Location) {
  utils.setMethodsVisibility(Location, ['find'])
};

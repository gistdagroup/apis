'use strict';

const moment = require('moment');
const utils = require('../utils/utils');

module.exports = function (Location) {
  utils.setMethodsVisibility(Location, ['create', 'find', 'createChangeStream']);

  Location.observe('before save', function beforeSave(ctx, next) {
    if (ctx.instance) {
      var Device = Location.app.models.Device;
      if (!ctx.instance.uuid) {
        next(new Error('The \`location\` instance is not valid. Details: \`uuid\` can\'t be blank (value: undefined).'));
      } else {
        Device.findOne({where: {name: ctx.instance.uuid}}, function (err, device) {
          if (device) {
            var vehicle = device.vehicle;
            ctx.instance.vehicle = vehicle;
          }
          ctx.instance.hash = ctx.instance.uuid + '-' + moment(ctx.instance.date).format();
          next();
        });
      }

    } else {
      next();
    }

  });
};

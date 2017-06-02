'use strict';
const utils = require('../utils/utils');

module.exports = function (Video) {
  utils.setMethodsVisibility(Video, ['create', 'find', 'findById', 'patchAttributes'])

  Video.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance) {
      if (!ctx.instance.isNewInstance) {
        ctx.instance.updatedAt = new Date();
        updateVehicleFromUuid(Video, ctx.instance, next)
      }
    } else {
      if (!ctx.data.isNewInstance) {
        ctx.data.updatedAt = new Date();
        updateVehicleFromUuid(Video, ctx.data, next)
      }
    }
  });
};


function updateVehicleFromUuid(Video, data, next) {
  var Device = Video.app.models.Device;
  Device.findOne({where: {name: data.uuid}}, function (err, device) {
    if (device) {
      var vehicle = device.vehicle;
      data.vehicle = vehicle;
    }
    next()
  })
}
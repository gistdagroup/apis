'use strict';

module.exports = function (Video) {
  Video.observe('before save', function updateTimestamp(ctx, next) {
    console.log('before save')
    if (ctx.instance) {
      if (!ctx.instance.isNewInstance) {
        console.log('update at instance')
        ctx.instance.updatedAt = new Date();
      }
    } else {
      if (!ctx.data.isNewInstance) {
        console.log('update at data')
        ctx.data.updatedAt = new Date();
      }
    }
    next();
  });
};

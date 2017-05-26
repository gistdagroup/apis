'use strict'

const es = require('event-stream');

module.exports = function (app) {
  var Location = app.models.Location;
  Location.createChangeStream(function (err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
}

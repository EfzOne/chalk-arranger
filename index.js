var mongoose = require('mongoose');
var Chalk = require('./Chalk');
var Step = require('step');
var debug = require('debug')('chalk:arranger');

debug("Connecting to Database...");
mongoose.connect('mongodb://localhost/test');

Step(
  require('./arranger'),
  function(err, results) {
    if(err) return console.error(err);
    debug("Complete");
    process.exit(0);
  }
);

var Step = require('step');

module.exports = function() {
  var next = this;
  Step(
    function() {
      next();
    }
  );
};

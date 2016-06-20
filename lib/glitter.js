var one = require('onecolor');

module.exports = function(strip, state) {
  state = state.map(function(v) {
    if (Math.random() < 0.05) {
      return one('#007700');
    } else {
      return v.saturation(-0.1, true).value(-0.1, true);
    }
  });
  state.forEach(function(v, idx) {
    strip.pixel(idx).color(v.hex());
  });
  strip.show();
  return state;
}
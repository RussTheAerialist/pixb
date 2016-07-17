var one = require('onecolor');

module.exports = function(strip, state) {
  var leds = state.leds;
  var color = state.color;
  state.leds = state.leds.map(function(v) {
    if (Math.random() < 0.05) {
      return one('#' + color);
    } else {
      return v.saturation(-0.1, true).value(-0.1, true);
    }
  });
  state.leds.forEach(function(v, idx) {
    strip.pixel(idx).color(v.hex());
  });
  strip.show();
  return state;
}

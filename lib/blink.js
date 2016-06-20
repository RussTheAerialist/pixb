module.exports = function (strip, state) {
  if (state) {
    strip.color('#000077');
  } else {
    strip.color('#000000');
  }
  strip.show();

  return !state;
};
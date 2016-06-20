var COLUMN_LENGTH = process.env.COLUMN_LENGTH;
var ROW_COUNT = process.env.ROW_COUNT;
var STICK = COLUMN_LENGTH && ROW_COUNT;

function cylpos(led) {
  if (!STICK) {
    return led;
  }
  var row = led % ROW_COUNT;
  var column = led % COLUMN_LENGTH;

  return row*COLUMN_LENGTH + column;
}

module.exports = function(strip, status) {
  var v = status.shift();
  status.push(v);
  status.forEach(function(v, idx) {
    strip.pixel(cylpos(idx)).color(v.value(-0.75, true).hex());
  });
  strip.show();
  return status;
}
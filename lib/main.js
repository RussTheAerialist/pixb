var pixel = require('node-pixel');
var five = require('johnny-five');
var one = require('onecolor');
var ledutils = require('ledutils');
var blink = require('./blink');
var glitter = require('./glitter');
var rainbow = require('./rainbow');

var interval = undefined;
var callback = undefined;
var board = undefined;
var strip = undefined;
var leds = undefined;

function stateCallback(func, defaultValue) {
  var state = defaultValue;
  return function() {
    state = func(strip, state);
  }
}

function stop() {
  if (interval) {
    clearInterval(interval);
    interval = undefined;
    callback = undefined;
  }
  strip.color('#000000');
  strip.show();
  leds = leds.map(function() { return one('#000000'); });
}

module.exports = {
  setup: function(pin, count) {
    leds = new Array(count);
    for(var i=0; i<count; i++) {
      leds[i] = one('#000000');
    }
    return new Promise(function (resolve, reject) {
      board = new five.Board();
      board.on('ready', function() {
        strip = new pixel.Strip({
          board: this,
          controller: 'FIRMATA',
          strips: [ {pin: pin, length: count} ]
        });
        strip.on('ready', function() {
          stop();
          resolve();
        });
      });
    });
  },
  blink_test: function() {
    stop();
    callback = stateCallback(blink, false);
    interval = setInterval(callback, 500); // 1 Hz
  },
  glitter: function(color) {
    stop();
    callback = stateCallback(glitter, {leds: leds, color: color});
    interval = setInterval(callback, 1000 / 5); // 5 fps
  },
  rainbow: function() {
    stop();
    ledutils.fill_rainbow({
      arr: leds,
      initialHue: 0,
      hueDelta: 360.0/leds.length
    });
    callback = stateCallback(rainbow, leds);
    interval = setInterval(callback, 1000 / 5);
  },
  stop: stop
};

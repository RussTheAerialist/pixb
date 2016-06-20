require('dotenv').config();
var express = require('express');
var app = express();
var logic = require('./lib/main');

app.get('/blink-test', function(req, res) {
  logic.blink_test();
  res.send('OK');
});

app.get('/glitter', function(req, res) {
  logic.glitter();
  res.send('OK');
});

app.get('/rainbow', function(req, res) {
  logic.rainbow();
  res.send('OK');
})

app.get('/', function(req,res) {
  logic.stop();
  res.send('OK');
});

logic.setup(process.env.LED_PIN, process.env.LED_COUNT).then(function() {
  app.listen(process.env.LISTEN_PORT, function() {
    console.log(`Bound to ${process.env.LED_PIN}/${process.env.LED_COUNT}\nListening on ${process.env.LISTEN_PORT}`);
  });
});
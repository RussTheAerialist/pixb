require('dotenv').config();
var express = require('express');
var app = express();
var logic = require('./lib/main');

app.get('/blink-test', function(req, res) {
  logic.blink_test();
  res.send('OK');
});

app.listen(process.env.LISTEN_PORT, function() {
  logic.setup(process.env.LED_PIN, process.env.LED_COUNT);
});
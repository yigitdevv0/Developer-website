const express = require('express');
const app = express();

//Ana sayfa
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// API sayfası
app.get('/api', function(req, res) {
  res.sendFile(__dirname + '/assets/html/api.html');
});

//Error Sayfası
app.get('/~', function(req, res) {
  res.sendFile(__dirname + '/error.html');
});

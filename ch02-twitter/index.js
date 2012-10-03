var express = require('express');

console.log('Creating express server...');
//Warning: express.createServer() is deprecated, express
//applications no longer inherit from http.Server,
//please use:
//
//  var express = require("express");
var app = express();
//var app = express.createServer();
console.log('Express server created.');

var tweets = [];

app.listen(8000);
console.log('Express listening on http://127.0.0.1:8000/');

app.get('/', function(req, res) {
  console.log('GET /');
  res.send('Welcome to Node Twitter');
});

app.post('/send', express.bodyParser(), function(req, res) {
  if (req.body && req.body.tweet) {
    tweets.push(req.body.tweet);
    res.send({status:"ok", message:"Tweet received"});
  } else {
    //no tweet?
    res.send({status:"nok", message:"No tweet received"});
  }
});

app.get('/tweets', function(req, res) {
  res.send(tweets);
});

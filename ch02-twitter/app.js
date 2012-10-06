var express = require('express');

console.log('Creating express server...');
var app = express.createServer();

app.use(express.favicon(__dirname + '/favicon.ico'));
app.use('/public', express.static(__dirname + '/public'));

console.log('Express server created.');

var tweets = [];

app.listen(8000);
console.log('Express listening on http://127.0.0.1:8000/');

app.get('/', function(req, res) {
  var title = 'Chirpie',
      header = 'Welcome to Chirpie'

  res.render('index.ejs', {
    locals: {
      'title': title,
      'header': header,
      'tweets': tweets,
      stylesheets: ['/public/style.css']
    }
  })
})

app.post('/send', express.bodyParser(), function(req, res) {
  if (req.body && req.body.tweet) {
    
    tweets.push(req.body.tweet);
    
    if (acceptsHtml(req.headers['accept'])) {
      res.redirect('/', 302);
    } else {
      res.send({status:"ok", message:"Tweet received"});  
    }
    
  
  } else {
    //no tweet?
    res.send({status:"nok", message:"No tweet received"});
  }
});

app.get('/tweets', function(req, res) {
  res.send(tweets);
});

function acceptsHtml(header) {
  var accepts = header.split(',');
  for (i=0; i<accepts.length; i+=0) {
    if (accepts[i] === 'text/html') {
      return true;
    }
    return false;
  }
}
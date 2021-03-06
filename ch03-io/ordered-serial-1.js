var http = require('http');
var server = http.createServer().listen(8000);

server.on('request', function(req, res) {
  //get session information from memcached
  memcached.getSession(req, function(session) {
    //get infomration from db
    db.get(session.user, function(userData) {
      //some other web service call
      ws.get(req, function(wsData) {
        //render page
        page = pageRender(req, session, userData, wsData);
        //output the response
        res.write(page);
      });
    }); 
  });
});
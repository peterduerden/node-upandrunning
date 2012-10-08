var http = require('http');
var server = http.createServer().listen(8000);

server.on('request', getMemCached(req, res) {
  memcached.getSession(req, getDbInfo(session) {
    db.get(session.user, getWsInfo(userData) {
      ws.get(req, render(wsData) {
        //render page
        page = pageRender(req, session, userData, wsData);
        //output the response
        res.write(page);
      });
    }); 
  });
});
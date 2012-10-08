var http = require('http');
var server = http.createServer().listen(8000);

http.on('request', function(req, res) {
  var render = function(wsData) {
    page = pageRender(req, session, userData, wsData);
  };
  
  var getWsInfo = function(userData) {
    ws.get(req, render);
  };
  
  var getDbInfo = function(session) {
    db.get(session.user, getWsInfo);
  };
  
  var getMemCached = function(req, res) {
    memCached.getSession(req, getDbInfo);
  };
});
var http = require('http');
var cluster = require('cluster');
var config = require('./app/config');

process.on('uncaughtException', function(err) {
    console.log(err.stack || err.message || err.err || err.toString());
});

if(cluster.isMaster){
  var argv = config.getArgv();
  for(var i = 0; i < config.cpus; i++) {
    cluster.fork();
  }
} else {
  http.createServer(require('./app/server')).listen(config.port, function() {
      console.log('listening on ', config.port);
  });
}
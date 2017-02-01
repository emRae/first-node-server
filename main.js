var http = require('http');
// fs stands for file system
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var port = '8080';
var logger = new EventEmitter();

logger.on('error', function(err){
	console.log('ERROR: ' + err);
});

http.createServer( function(request, response){
	fs.readFile('index.html', function(err,content) {
		if(err){
			response.writeHead(404, {'Content-Type': 'text/html'});
			logger.emit('error', err);
			response.end('failed');
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(content);
		}
	});
}).listen(port);

console.log('server running on port:' + port);
var http = require('http');
var port = '8080';

http.createServer( function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("My first node app worked!");
}).listen(port);

console.log('server running on port:' + port);
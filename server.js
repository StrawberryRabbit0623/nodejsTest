var http = require('http');
var requestIP = require('request-ip');
var port = 4922;

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Jenkins is ready?' + port);
    response.end();
    console.log(requestIP.getClientIp(request));
    console.log("=================");
}).listen(port);
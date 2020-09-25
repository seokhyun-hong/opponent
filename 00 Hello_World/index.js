var http = require('http');

var server = http.createServer(response);

    server.listen(process.env.PORT);

function response(req, res)
{
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello World');
    res.end();
}
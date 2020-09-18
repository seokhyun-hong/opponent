var http = require('http');

function onRequest(req, res)
{
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello World!');
    res.end();
}

http.createServer(onRequest).listen(process.env.PORT);
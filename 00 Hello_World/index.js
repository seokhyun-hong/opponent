class Main
{
    constructor(req, res)
    {
    this.req = req;
    this.res = res;
    }

    onRequest(req, res)
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.write('Hello World!');
    	res.end();
    }

}

var request = new Main();

var http = require('http');

http.createServer(request.onRequest).listen(process.env.PORT);
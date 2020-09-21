class Main
{
    constructor(req, res)
    {
    this.req = req;
    this.res = res;
    }

    response(req, res)
    {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write('Hello World!');
        res.end();
    }

}

var main = new Main;

var http = require('http');

http.createServer(main.response).listen(process.env.PORT);
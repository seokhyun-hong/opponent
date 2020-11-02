var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(response);

    server.listen(process.env.PORT);

function response(req, res)
{
    var _url = req.url;
    var pathname = url.parse(_url, true).pathname;
    var queryData = url.parse(_url, true).query;

    if(pathname == '/')
    {
        if(queryData.id == undefined)
        {

            fs.readFile(`data/${queryData.id}`+'.js', 'utf8', function(err,description) {

                var title  = '<br>';

                    description = 'document.write("<p>Hello_World</p>");';

            /*
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            */

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(tHTML(title, description));
            res.end();
            });

        }
        else
        {

            fs.readFile(`data/${queryData.id}`+'.js', 'utf8', function(err,description) {

                var title  = queryData.id;

            /*
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            */

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(tHTML(title, description));
            res.end();
            });

        }
    }
    else
    {
        res.writeHead(404);
    }

}

function tHTML(title, body)
{
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <header>
                    <h1> OPPONENT </h1>
                </header>
                <nav>
                    <a href="/?id=${title}">${title}</a>
                </nav>
                <section>
                    <script type="text/javascript">
                        ${body}
                    </script>
                </section>
                <footer>
                </footer>
            </body>
        </html>
    `;
}
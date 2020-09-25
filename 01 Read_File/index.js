var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(response);

    server.listen(process.env.PORT);

function response(req, res)
{
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname == '/')
        {
            fs.readFile(`data/${queryData.id}`+'.js', 'utf8', tDescription);
        }

    else
        {
            return res.writeHead(404);
        }

    function tDescription(err, description)
    {
        var title = queryData.id;

        if (queryData.id == undefined)
            {
                title  = '<br>';
                title += '<br>';

                description = 'document.write("Hello_World");';
            }

            /*
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            */

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(tHTML(title, description));
        res.end();

    }

    function tHTML(title, description)
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
                            ${description}
                        </script>
                    </section>
                    <footer>
                    </footer>
                </body>
            </html>
        `;
    }
}
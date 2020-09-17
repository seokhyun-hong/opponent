var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (req,res){

    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

        if(_url == '/')
            {
                title = 'Document';
            }

        if(_url == '/favicon.ico')
            {
                return res.writeHead(404);
            }

    /*
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    */

    res.writeHead(200, {'Content-Type' : 'text/html'});



    fs.readFile(`data/${title}`+'.js', 'utf8', function(err, description){
    
        if (queryData.id == undefined)
            {
                title  = '<br>';
                title += '<br>';
                description = 'document.write("Hello_World");';
            }

    var template = `
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

    res.write(template);
    res.end();

    })
    
});

app.listen(process.env.PORT);
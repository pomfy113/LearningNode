var http = require('http')
var fs = require('fs')
var url = require('url')
var map = require('through2-map')


var listening = process.argv[2];
var filename = process.argv[3];


var server = http.createServer(function (req, res){
    var input = url.parse(req.url, true)

    if(req.method == 'GET'){
        date = new Date(input.query['iso'])
        hr = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();


        if(input.pathname == '/api/parsetime'){
            output = {
                "hour": hr,
                "minute": min,
                "second": sec
            }
        }
        else if(input.pathname == '/api/unixtime'){
            output = {
                "unixtime": date.getTime()
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(output))

    }

})

server.listen(listening)

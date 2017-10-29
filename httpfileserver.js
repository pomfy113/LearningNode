var http = require('http')
var fs = require('fs')
var listening = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function (req, res){
    var file = fs.createReadStream(filename)
    file.pipe(res)
})

server.listen(listening)

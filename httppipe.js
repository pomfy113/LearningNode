var app = require('http');
var url = process.argv[2]
var bl = require('bl')

app.get(url, function(res){
    res.pipe(bl(function (err, data) {
        console.log(data.toString().length)
        console.log(data.toString());
    }))

})

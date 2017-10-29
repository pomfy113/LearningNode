var app = require('http');
var urllist = [process.argv[2], process.argv[3], process.argv[4]]

var bl = require('bl')

for (i = 0; i < urllist.length; i++){
    var url = urllist[i];
    app.get(url, function(res){
        for(i=0; i<url.length-1; i++)
        url[i].res
            res.pipe(bl(function (err, data) {
                console.log(data.toString());
            }))

    })

}

var app = require('http');
var url = process.argv[2]


app.get(url, function(res){
     res.on("data", function (data){
         console.log(data.toString());
     })
})

var fs = require('fs')
var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }

module.exports = function (dir, ext, callback){
    fs.readdir(dir, function(err, files){
        if(err) return callback(err);

        list = []

        files.forEach(function(file){
            if(path.extname(file) == '.' + ext){
                list.push(file);
            }
        })
        callback(null, list)
    })
}

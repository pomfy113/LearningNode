var net = require('net')
var listening = process.argv[2];

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function currentDate(){
    var date = new Date()

    return data = String(date.getFullYear() + '-' +
      zeroFill(date.getMonth() + 1) + '-' +
      zeroFill(date.getDate()) + ' ' +
      zeroFill(date.getHours()) + ':' +
      zeroFill(date.getMinutes()) + "\n"
  )

}
var server = net.createServer(function (socket) {
    socket.end(currentDate());
})

server.listen(listening)

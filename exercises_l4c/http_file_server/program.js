var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  // write your code below

})

server.listen(Number(process.argv[2]))

setTimeout(function() {
  process.exit();
}, 2000);

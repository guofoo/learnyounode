var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  // enter your code below

})

server.listen(Number(process.argv[2]))

// exit if no response after 2 seconds
setTimeout(function() {
  process.exit();
}, 1000);

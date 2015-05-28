var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  // write your code below
  res.writeHead(200, { 'content-type': 'text/plain' })
  
  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))


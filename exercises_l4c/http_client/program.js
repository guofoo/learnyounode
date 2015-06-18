var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  // enter your code below
  response.on('data', console.log);

  response.on('error', console.error);
});

// exit if no response after 1 second
setTimeout(function() {
  process.exit();
}, 1000);

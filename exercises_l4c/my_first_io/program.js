var fs = require('fs')

// enter your code below
var contents = fs.readFieSync(process.argv[2])


var lines = contents.toString().split('\n').length - 1
console.log(lines)


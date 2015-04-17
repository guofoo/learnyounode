var fs = require('fs')

// enter your code below
var contents = fs.readFileSync(process.argv[2])


var lines = contents.toString().split('\n').length - 1
console.log(lines)


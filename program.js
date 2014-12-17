var fs = require('fs');
var contents=fs.readFileSync(process.argv[2]);
part=contents.toString().split('\n');
console.log(part.length-1);

var fs = require('fs');
var file = process.argv[2];
fs.readFile(file,function Addone (err, contents) { 
	var line=contents.toString().split('\n').length - 1; 
console.log(line);
} );

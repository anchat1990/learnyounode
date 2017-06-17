var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(process.argv[3]);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);
})
server.listen(process.argv[2]);

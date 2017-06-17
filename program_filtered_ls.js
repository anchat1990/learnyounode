var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], callback);
function callback(err, files) {
    if (!err) {
        files.forEach(function(file) {

//            console.log(path.extname(file))
            if (path.extname(file) === ("." + process.argv[3])) console.log(file);
        });
    }
} 

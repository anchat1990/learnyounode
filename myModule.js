var fs = require("fs");
var path = require("path");

module.exports = function(dirName, extension, callback) {
    var fileList = [];
    fs.readdir(dirName, function(err, files) {
        if (!err) {
    	    files.forEach(function(file) {
        	if (path.extname(file) === ("." + extension)) fileList.push(file);
      	    })
            callback(null, fileList);
        }
        else {
            callback(err);
        }
    });
};

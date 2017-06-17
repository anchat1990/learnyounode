var myModule = require("./myModule");

try {
    var files = myModule(process.argv[2], process.argv[3], function(err, files) {
    	files.forEach(function(file) {console.log(file)});
    });
}
catch(e) {
    console.log("error running script: ",e);
}

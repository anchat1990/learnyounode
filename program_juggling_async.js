var http = require("http");
var bl = require("bl");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var data1, data2, data3;

http.get(url1, function(response) {
    response.setEncoding("utf8");
    response.pipe(bl(function(err, data) {
	if (!err) {
	    data1 = data.toString();
	    http.get(url2, function(response) {
	    	response.setEncoding("utf8");
    		response.pipe(bl(function(err, data) {
        	    if (!err) {
                        data2 = data.toString();
                        http.get(url3, function(response) {
		            response.setEncoding("utf8");
                	    response.pipe(bl(function(err, data) {
         		    	data3 = data.toString();
				console.log(data1);
				console.log(data2);
				console.log(data3);
			    }));
			});
		    }
		}));
	    });
        }
    }));
});


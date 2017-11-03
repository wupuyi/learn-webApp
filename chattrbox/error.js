var fs = require('fs');
var extract = require('./extract');

var handleError = function(err, res) {
    res.writeHead(404);
    // res.end();
    // return res;
    var url = '/404.html';
    var filePath = extract(url);

    fs.readFile(filePath, function(err, data) {
        res.end(data);
    });
};



module.exports = handleError;
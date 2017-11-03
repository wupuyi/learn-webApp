var http = require('http');
var fs = require('fs');
//  ./extract为路径 
var extract = require('./extract');
var handleError = require('./error');

var server = http.createServer(function(req, res) {
    console.log('Responding to a request');

    // __dirname 表示当前执行脚本所在的目录
    var filePath = extract(req.url);
    fs.readFile(filePath, function(err, data) {
        if(err) {
            handleError(err, res);
            return;
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});
server.listen(3000);
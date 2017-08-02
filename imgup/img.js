/**
 * Created by dllo on 17/8/2.
 */
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url)
    console.log(urlObj);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if (pathname === '/zhandong.jpg') {
        var finalPath = path.join(__dirname,pathname);
        console.log(finalPath);
        fs.readFile(finalPath,function (err, data) {
            response.end(data)
        })
    } else {
        response.statusCode = 404
        response.end("sb")
    }

})
server.listen(8080, function () {
    console.log('服务运行在http://localhost:8080')
})
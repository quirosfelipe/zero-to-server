const http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/OK') {
        res.writeHead(200);
        res.end();

    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(3000, function () {
    console.log('Listening on port 3000...');
});
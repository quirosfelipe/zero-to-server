const http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/OK') {
        res.writeHead('/200');
        res.end();

    } else if (req.url === '/Created') {
        res.writeHead(201);
        res.end();

    } else if (req.url === '/Moved') {
        res.writeHead(301);
        res.end();

    } else if (req.url === '/Found') {
        res.writeHead(302);
        res.end();

    } else if (req.url === '/Bad-Request') {
        res.writeHead(400);
        res.end();

    } else if (req.url === '/Unauthorzied') {
        res.writeHead(401);
        res.end();

    } else if (req.url === '/Forbidden') {
        res.writeHead(403);
        res.end();

    } else if (req.url === '/Internal-Server-Error') {
        res.writeHead(500);
        res.end();

    } else if (req.url === '/Gateway-Timeout') {
        res.writeHead(504);
        res.end();

    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(3000, function () {
    console.log('Listening on port 3000...');
});
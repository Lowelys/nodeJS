let http = require('http');

let cors = (res, req) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false;
}

let server = http.createServer((req, res) => {
    if (cors(res, req)) return;

    console.log('some request');
    let message = 'yoyo';
    switch (req.url) {
        case '/users':
            res.write(`[{"id": 1, "banned": true, "name": "Sasha"}, {"id": 2, "name": "Max"}]`);
            break;
        case '/lessons':
            res.write(`tasks`);
            break;
        default:
            res.write(`PAGE NOT FOUND`);
    }
    res.end();
});

server.listen(7542);
console.log(http);

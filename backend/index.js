let http = require('http');

let server = http.createServer((req, res) => {
    console.log('some request');
    let message = 'yoyo';
    switch (req.url) {
        case '/users':
            res.write(`[{"id": 1, "name": "Sasha"}, {"id": 2, "name": "Max"}]`);
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

let http = require('http');

let server = http.createServer((req, res) => {
    console.log('some request');
    let message = 'yoyo';
    switch (req.url) {
        case '/':
            res.write(`HOME`);
            break;
        case '/tasks':
            res.write(`tasks`);
            break;
        default:
            res.write(`PAGE NOT FOUND`);
    }
    res.end();
});

server.listen(7542);
console.log(http);

const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' });

        let result = {
            nombre: 'Rodrigo',
            edad: 26,
            url: res.url
        }

        res.write(JSON.stringify(result));
        res.end();
    })
    .listen(8080);

console.log(`Escuchando el puerto 8080`);
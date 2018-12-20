const ws   = require('websocket').server;
const http = require('http');

const socket = new ws({
    httpServer: http.createServer().listen(3000)
});

socket.on('request', (req) => {

    const conn  = req.accept(null, req.origin);
    
    console.log('Origin ->', req.origin);

    conn.on('message', (message) => {
        conn.sendUTF('Hello from server');
    });

    conn.on('close', (connectionn) => {
        console.log('Connection is closed');
    });

});
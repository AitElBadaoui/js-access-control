const WebSocket = require('ws');

var port = 8090;
const wss = new WebSocket.Server({ port: port });
const ws_client = new WebSocket('ws://localhost:8090'); 

console.log("websocket server listen on " + port);

const USER_LOGIN = "user-login";

wss.on('connection', function connection(ws) {

    console.log('server connection');
    ws.on('message', function incoming(message) {
        console.log(`server received: ${message}`);
    });
      
    var data = {
        "event": 'user-login',
        "date": new Date()
    }
    ws.send(JSON.stringify(data));
});

wss.on('close', function connection(ws) {
    console.log("Connection closed!");
});

wss.on('error', (error) => {
    console.log(error);
});
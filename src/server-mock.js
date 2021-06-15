const WebSocket = require('ws');

var port = 8090;
const wss = new WebSocket.Server({ port: port });
const ws_client = new WebSocket('ws://localhost:8090'); 

console.log("websocket server listen on " + port);

const USER_LOGIN = "user-login";
const USER_UNKNOWN = "user-unknown";

wss.on('connection', function connection(ws) {

    console.log('server connection');
      
    setTimeout(() => {
        var data = {
            "event": USER_UNKNOWN,
            "date": new Date()
        }
        ws.send(JSON.stringify(data));
    }, 1000);

    setTimeout(() => {
        var data = {
            "event": USER_LOGIN,
            "event_params": "Mihael",
            "date": new Date()
        }
        ws.send(JSON.stringify(data));
    }, 3000);
    
    
    ws.on('message', function incoming(message) {
        console.log(`server received: ${message}`);
    });
});

wss.on('close', function connection(ws) {
    console.log("Connection closed!");
});

wss.on('error', (error) => {
    console.log(error);
});
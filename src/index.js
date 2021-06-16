import "./style.scss";
import { ComponentService } from "./app/component.service";

var W3CWebSocket = require('websocket').w3cwebsocket;
const componentService = new ComponentService();

function connect() {
    var client = new W3CWebSocket('ws://localhost:8090/', 'echo-protocol');
    
    client.onerror = function() {
        console.log('Connection Error');
        console.log('Retrying connection ..... ');
    };
    
    client.onopen = function() {
        console.log('WebSocket Client Connected');
    };
    
    client.onclose = function() {
        console.log('echo-protocol Client Closed');
        setTimeout(function(){
            connect(), 5000
        });
    };
    
    client.onmessage = function(message) {
        const data = JSON.parse(message.data);
        componentService.hideInfo();
        switch(data.event){
            
            case 'user-login':
                client.send('Login Success ! ');
                componentService.showSuccess();
                componentService.setUser(data.event_params);
                break;
            case 'user-unknown':
                client.send('Login wrong ! ');
                componentService.showError();
                break;
        }
    }
}
connect();
// 引入websocket模块
var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
// 创建WebSocket服务器，并绑定指定端口号
var ws = new WebSocketServer({
    port: port
});
//该数组记录消息
var messages = [];
console.log('websockets server started');

ws.on('connection', function (socket) {
    console.log('client connection established');

    messages.forEach(function(msg) {
        socket.send(msg);
    });

    socket.on('message', function (data) {
        console.log('message received: ' + data);
        messages.push(data);
        ws.clients.forEach(function(clientSocket) {
            clientSocket.send(data);
        });
    });
});
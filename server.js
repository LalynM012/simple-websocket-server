const Websocket = require('ws');
const PORT = 5000;
const wsServer = new Websocket.Server({
    port: PORT
});
wsServer.on('connection', function (socket) {
    //Some feedback on the console
    console.log('A client just connected');

    //Attach some behaviour to the incoming socket
    socket.on('message', function(message){
        console.log("Received Message: " + message);
        //        socket.send("This is an echo msg: " + message);
        wsServer.clients.forEach(function(client) {
            client.send("Someone said this shit: " + message);
        });
    })
});
console.log((new Date()) + " Server is Listening on port " + PORT);
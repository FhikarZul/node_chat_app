const express = require('express');
const io  = require('socket.io');


const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log("SERVER IS STARTED ON", PORT);
});

const socket  = io(server);

socket.on('connection', (client) => {
     console.log("CONNECTED SUCCESS", client.id);

     client.on('disconnect', () => {
        console.log("DISCONNECTED SUCCESS", client.id);
     });

     client.on('message', (data) => {
        console.log(data);
        client.broadcast.emit('message-receive', data);
     });
});







const http = require ('http');
const path = require ('path');
const express = require ('express');
const socketio = require ('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketio.listen(server);

require('./sockets')(io);



// static files
app.use (express.static(path.join(__dirname,'public')));

//starting server
server.listen(3000, ()=> {

    console.log('server up')
});
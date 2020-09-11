const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3000,function (){
    console.log("App is listening on port 3000");
});

const io = socket(server);

io.on('connection',(socket)=>{
    //console.log('Made the socket connection ' + socket.);
    socket.on('textChanged',(data)=>{
        //console.log("Receving text from client: ",data);
        socket.broadcast.emit('textChangedFromServer',data);
    });
});

app.use(express.static('public'));

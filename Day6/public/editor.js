const socket = io.connect('http://localhost:3000');

const editor = document.getElementById('editor');

function sendText(){
    //send data to server
    socket.emit('textChanged', editor.value);
};

//listening from server
socket.on('textChangedFromServer',(data)=>{
    console.log("Receiving from server: ",data);
    editor.value = data;
});
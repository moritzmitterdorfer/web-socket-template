var socket; 

$(function () {

    socket = io();
    socket.emit('message', 'Hallo, World!');

    socket.on('message', function(message) {
    	console.log(message);
    })

 });

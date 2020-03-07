var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static('static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('message', function(message) {
  	// broadcast message
  	io.emit('message', message);
  });
});

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
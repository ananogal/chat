var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(require('express').static('public'));

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user conected');
	socket.on('disconnect', function(){
    console.log('user disconnected');
	});
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});


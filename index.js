var app = require('express')();
var http = require('http').createServer(app);

app.use(require('express').static('public'));

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});


//Dependencies
var http = require('http');

// create a server 
var server = http.createServer(function(req, res){
    res.end("Hello World!\n");
});

// start the server and listen on port 3000
server.listen(3000, function(){
    console.log("The server is listening on port 3000\n");
});

//Type http://127.0.0.1:3000/ in your browser   OR http://[::1]:3000/
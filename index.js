//Dependencies
var http = require('http');
var url = require('url');

// create a server 
var server = http.createServer(function(req, res){
    console.log(req);

    //Get the URL
    var parsedUrl = url.parse(req.url, true);

    //Get the path
    var path = parsedUrl.pathname;

    res.end("Hello World!\n");

    console.log("\n\nThe req.url is:  "+ req.url);
    console.log("\n\n The parsedUrl is: " + parsedUrl);
    console.log("\n\n Pathame is:   " + path);
});

// start the server and listen on port 3000
server.listen(3000, function(){
    console.log("The server is listening on port 3000\n");
});

//Type http://127.0.0.1:3000/ in your browser   OR http://[::1]:3000/
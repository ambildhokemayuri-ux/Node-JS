

var http=require('http');
var fs=require('fs');

var onRequestHandler=function(request,response){
    var pathname="./"+request.url;
    fs.readFile(pathname,(err,data)=>{
        if(err){
            //throw err;
            console.log("something went wrong");
            response.writeHead(404,{'content-type':'text/html'});
        }
        else{
            response.writeHead(200,{'content-type':'text/html'});
            response.write(data.toString());
            
        }
        response.end();
    });
};

var server=http.createServer(onRequestHandler);
server.listen(3000);
console.log("Server starting");
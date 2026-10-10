var http = require('http');
const fs = require('node:fs');
//const path = require('node:path');
const PORT = 2233;

const myserver= http.createServer(function (request,response){
    
    //response.writeHead(200, {'Content-Type':'text/html'});
    //request.url('/hi');
    
    var filename="";

    console.log("Web server is starting....");

    //response.setHeader
    if(request.method==="GET"){
        
        if(request.url=="/"){
            response.write("This is root url");
        }

        if(request.url==="/welcom"){
            response.write("This is welcome page");
        }


        //filename='index.html';
    }
;
    response.end();
    
    
    
    //fs.watchFile();
})

myserver.listen(PORT, ()=> {
    console.log("server started at port ");
})

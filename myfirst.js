var http = require('http');
const { error } = require('node:console');
const fs = require('node:fs');
const path = require('path');
const PORT = 2233;

const myserver= http.createServer(function (request,response){
    
    
    // var filename="";

    console.log("Web server is starting....");

    
    if(request.method==="GET"){
        
        if(request.url=="/"){

            const filePath= path.join(__dirname,'index.html');


            fs.readFile(filePath,'utf-8', function (err,data){
                console.log(" I am inside a readfile scope !")
                if (error){
                    response.writeHead(500, {'Content-Type': 'text/html'});
                    response.end('Error reading index.html');
                    console.error('error reading file:',error);
                } else {
                    response.writeHead(200, {'Content-Type':'text/html'});
                    response.end(data);
                }
            });

            //fs.readFile('/index.html');
            
            //response.writeHead(200, {'Content-Type':'text/html'});
            
            // fs.appendFile(function (data, error) {
            //     data="./index.html";
            //     if (error){
            //         response.write("here is an error");
            //     }
            // });
            

            // fs.appendFile(function (data,error)){
            //     data.readFile("index.html");
                
            //     if (error){
            //         log.write("error");
            //     }

            // }

            // fs.readFile('index.html','utf-8',(err,data)=>{
            //     if(err){
            //         response.statusCode = 500;
            //         response.end('Internal Server Error');
            //     } else {
            //         response.statusCode = 200;
            //         response.setHeader('Content - Type', 'text/html');
            //         response.end(data);
            //     }
            // })


            response.write("This is root url");

        }

        if(request.url==="/welcom"){
            response.write("This is welcome page");
        }


    }
;
    response.end();
    
    
    
    //fs.watchFile();
})

myserver.listen(PORT, ()=> {
    console.log("server started at port ");
})

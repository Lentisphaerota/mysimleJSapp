var http = require('http');

const fs = require('node:fs').promises;
const fs1 = require('node:fs').promises;
const path = require('path');
const PORT = 2233;

const requestListener = function (req, res) {

    // res.writeHead(200);

    // const filePath= path.join(__dirname,'index.html');
     
    fs.readFile(__dirname+"/index.html").then(contents =>{
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        res.end(contents);
    })    
}

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log('Server is running on ${PORT}');
});
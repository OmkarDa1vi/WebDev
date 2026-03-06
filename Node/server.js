const {createServer} = require("node:http");

const hostname = "localhost";
const port = 3000;

const server = createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello...");
})

server.listen(port, hostname, ()=>{
    console.log(`server is running...at PORT ${port}`);
})
// 07_Basic_Server.js

// HTTP : In Node.js server under(inside) responces and request  handle.
// HTTP : Hyper Text Transfer Protocol
// HTTP : Client-Server Protocol
// HTTP : Request-Response Protocol




const http = require('http');                   // Core  -> Non-Global Moule 

http.createServer((req, resp) => {              // (take req) or (recive req) browser search bar url through
    resp.write('Hello from the server');        // resp(Response) to client
    resp.end();                                 // stop server
}).listen(9999);                                // server port


// save file             :  07_Basic_Server.js
// run on cmd            :  node .\07_Basic_Server.js
// open browser run port :  http://localhost:9999/


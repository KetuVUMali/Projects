// 10_Basic_API.js

// Create a simple api
    // 1. make server
    // 2. create a header and Api body
    // 3. create an API static data
    // 4. put data into another file
    //
    // 
    // . run a server

const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, {'Content-Type': 'application\json'});

    resp.write(JSON.stringify({name:'Ketan',age:23,gender:'Male'}));    // JS obj convert into JSON. static data.

    resp.end();
}).listen(5000);

//nodemon .\10_Basic_API.js

// http://localhost:5000/

// resp.writeHead(200,{'Content-Type': 'application\json'})    sets the HTTP response status and headers.
    //200: The HTTP status code for a successful request. (200 : Get Data API Code)
    //{'Content-Type': 'application/json'}: Indicates that the response content is in JSON format.

// resp.write(JSON.stringify({name:'Ketan',age:23,gender:'Male'}));
    // resp.write(): Sends data in the response body.
    // resp.write sends the data to the client as the response body.
    // JSON.stringify({name:'Ketan',age:23,gender:'Male'})) converts a JavaScript object into a JSON string. 

// resp.end(): Signals that the response is complete and no more data will be sent.


// .listen(5000);
    // listen(5000) tells the server to listen for incoming requests on port 5000.
    // The server will now handle requests at http://localhost:5000.



// Postman : API Testing Tool
    // Get : To get the data from the server.
    // Post : To send the data to the server.
    // Put : To update all the data on the server.
    // Delete : To delete the data from the server.
    // Patch : To update the data partially on the server.

    // GET : http://localhost:5000/             // Get the data from the server.
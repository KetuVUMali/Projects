// 07_Basic_Server1.js

    // HTTP : In Node.js server under(inside) responces and request  handle.

    // Run the code and open the browser to see the output.
    // The server will display the message "Hello from the server" in the browser.

    // Run : node .\07_Basic_Server1.js
    // Open Browser : http://localhost:9999/

    // Import the http module
        const http = require('http');

    // Create the server Function
        function dataControl(req,resp){
            resp.write("<h1>hello this is Node.Js Server</h1>");
            resp.end();
        }

    // Create the server on port 9999 
        http.createServer(dataControl).listen(9999); 
// Import the http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
        // Set the response HTTP header
        res.writeHead(200, { 'Content-Type': 'text/html' });        // 200 reps port  and  other content type
        // Send the response content
        res.write('<h1>Hello, Welcome to my Node.js Server2!</h1>');
        res.end("End Response"); // End the response showing the message "End Response" on Web Page.
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');      // Show conole log message (Server is running at http://localhost:3000)
});



// Explanation of the Code
    // http.createServer()
        // Creates an HTTP server that listens for requests.
        // The callback function receives two arguments:
                // req (Request): Contains details about the HTTP request.
                // res (Response): Used to send a response back to the client.

    // res.writeHead()
        // Sets the HTTP response status code and headers.
        // Example: res.writeHead(200, { 'Content-Type': 'text/html' });
        // 200: Status code (OK).
        // Content-Type: text/html: Tells the browser to treat the response as HTML.
    
    // res.write()
        // Writes the response body.
        // Example: res.write('<h1>Hello!</h1>'); sends an HTML heading.
        
    // res.end()
        // Signals the end of the response.

    // server.listen(3000)
        // Starts the server on port 3000. You can use any available port.




// Arow Function :
    // Short functions with a single expression.
    // Syntax: (parameters) => expression
    // Example: (a, b) => a + b.
    // Best for Callbacks and Anonymous Functions – Commonly used in array methods (map, filter, reduce, etc.)
    // Example:
        // const numbers = [1, 2, 3, 4, 5];
        // const doubled = numbers.map((num) => num * 2);
        // console.log(doubled);           // Output: [2, 4, 6, 8, 10]
    // Benefits: 
        // Shorter syntax. (Reduces code length.) 
        // No need to use the function keyword.
        // Implicit return for single expressions.
        // Lexical this binding (no binding of this keyword).
        // Commonly used in array methods (map, filter, reduce, etc.)
        // Best for Callbacks and Anonymous Functions – Commonly used in array methods (map, filter, reduce, etc.)
        // 


        // Example of Arrow Function
        // Normal Function
            function add(a, b) {
                return a + b;
            }
            var r1 = add(2, 3); 
            console.log("R1 : ",r1);    // Output: 5

        
        //3. Arrow Function
            const add1 = (a, b) => a + b;

        // Call the function
            var r2 = add1(2, 3); 
            console.log("R2 : ",r2);    // Output: 5
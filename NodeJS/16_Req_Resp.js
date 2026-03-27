// 16_Req_Resp.js


// app.get('/', (req, res) => {           
//   });
    
    // req and res, short for request and response
    // req (Request) → Contains details about the incoming request.
    // res (Response) → Used to send data back to the client.
    // The req and resp parameters in an Express.js route handler represent the HTTP request and response objects respectively.
    // They are critical for handling client-server communication in web applications.
    // used to intraction between server and client (like Ans & Ques)


    //                   Client                                   Server
    //                                 --> Request --->
    //                                 <-- Responces <-- 
    //                 HTML,CSS,JS                            Node.Js, PHP, Java, Python


// Request Object
    // The req object contains information about the HTTP request sent by the client. 
        // This includes details like:
            // URL (Which page/request)
            // Method (GET, POST, etc.)
            // Headers (Extra info like authentication)
            // Body (Data sent by the user in POST requests)
            // Query Parameters (Extra info in the URL)

            // Example :
                // app.get('/user', (req, res) => {
                //     console.log(req.method);             // GET
                //     console.log(req.url);                // /user
                //     console.log(req.headers);            // User's browser details
                //     res.send("User Info Received");
                // });


    // Common Properties of req
            // Property	   :    Description
            // req.url	        The requested URL path (e.g., /home).
            // req.method	    The HTTP method used (e.g., GET, POST, PUT, DELETE).
            // req.params	    Contains route parameters (e.g., /user/:id → req.params.id).
            // req.query	    Contains query string parameters (e.g., /search?name=ketan → req.query.name).
            // req.body	        Contains the body of the request (requires middleware like express.json()).
            // req.headers	    Access to the request headers sent by the client.




// Response Object
    // The resp object is used to craft the response sent back to the client. 
        // It allows you to:
            // Send data (e.g., JSON, HTML, files).
            // Set HTTP status codes.
            // Add custom headers.

    // Common Methods of resp
            // Method	      :   Description
            // res.send()	      Sends a response to the client (string, buffer, or object).(send file, send message on wp)(Send text or JSON data)
            // res.json()	      Sends a JSON response to the client. ( Send JSON response )
            // res.status()	      Sets the HTTP status code of the response (e.g., res.status(404)).
            // res.end()	      Ends the response without sending data.
            // res.redirect()	  Redirects the client to another URL/Page.
            // res.set()	      Sets a custom HTTP header for the response.
            // res.render()       open file


        // Example : 
                // app.get('/hello', (req, res) => {
                //     res.send("Hello, World!"); // Sending text
                // });
                
                // app.get('/data', (req, res) => {
                //     res.json({ name: "John", age: 25 }); // Sending JSON data
                // });


    // ✔ req (Request) → Gets data from the client (URL, headers, body)
    // ✔ res (Response) → Sends back a response (text, JSON, status codes)
    // ✔ Used together in routes to handle client-server communication





// 1. Import Express
const expressJS = require('express');

// 2. Create an Express application
const app = expressJS();

app.get('/', (req, res) => {  

    // console.log("Request from Brouser URL : ", req);
    console.log("Request from Brouser URL : ",req.query);                       // Data Get From URL (check request)
    // console.log("Request from Brouser URL : ", req.query.name);              // Request from Brouser URL :  anil


    // res.send('Hello, Express!'+req.query);          // show req at page
    res.send('Hello, Express! '+req.query.name); 

    }).listen(5000);


// console.log("Request from Brouser URL : ",req.query);
  // http://localhost:5000/                   // Request from Brouser URL :  {}
  // http://localhost:5000/?name=anil         // Request from Brouser URL :  { name: 'anil' }



// res.send('Hello, Express!'+req.query); 
  // http://localhost:5000/                   //  Hello, Express![object Object]
  // http://localhost:5000/?name=anil         //  Hello, Express![object Object]



// res.send('Hello, Express!'+req.query.name);
    // http://localhost:5000/                  // Hello, Express!undefined
    //  http://localhost:5000/?name=anil       // Hello, Express!anil
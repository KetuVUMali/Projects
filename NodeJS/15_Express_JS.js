// 15_Express_JS.js

// Express.Js
    // framework for Node.js.  like TS=Angular (Node.js web app framework)
    // Express.js enhances Node.js 
    // building web applications, APIs, and server-side applications.
    // It provides tools and utilities to handle routing, middleware, and HTTP requests/responses effectively.
    // A Node.js framework for building web applications and APIs.
    // Express.js is a fast, lightweight, and flexible web framework for Node.js. 
    // It helps developers create web applications and APIs easily.



// 1️⃣ Why Use Express.js?
  // ✅ Makes building web apps faster and easier
  // ✅ Handles routes (URLs) efficiently
  // ✅ Supports middleware (extra functionality)
  // ✅ Works well with databases (MongoDB, MySQL)
  // ✅ Used for REST APIs and Full-Stack apps



// 2️⃣ How Express.js Works?
    // Basic Flow:
        // A client (browser, app) sends a request
        // Express processes the request
        // Express executes middleware (optional)
        // Express sends a response
        
            // Client → Express (Routes, Middleware) → Response


// 3️⃣ Basic Express.js Server
    // 1️⃣ Imports Express.js
    // 2️⃣ Creates an Express app
    // 3️⃣ Defines a route (/) that sends "Hello, World!"
    // 4️⃣ Starts the server on port 3000

    // 🔗 Open http://localhost:3000 in a browser – You’ll see “Hello, World!”



 // Features of Express.js
    // 1. Routing:
        // Simplifies defining routes for handling HTTP methods (GET, POST, PUT, DELETE, etc.).
        // Enables parameterized routing for dynamic URL handling
    // 2. Middleware:
        // Middleware functions handle requests, responses, and errors in a modular way.
        // Examples: parsing JSON, validating requests, or authenticating users.
    // 3. Template Engines:
        // Supports template engines like EJS, Pug, and Handlebars for dynamic HTML rendering.
    // 4. Integration:
        // Easily integrates with databases (MongoDB, MySQL, etc.) and other tools.
        //  
    // 5. Static File Serving:
        // Simplifies serving static files like images, CSS, and JavaScript.
    // 6. Extensibility:
        // Thousands of plugins and middleware packages available in the Node.js ecosystem.


// Install Express
    // cmd =>   npm i express   (Main Directory)
       // package.json =>  "dependencies": {  "express": "^4.18.2"  }
                                         
// Basic web page & Server

// 1. Import Express
  const expressJS = require('express');

// 2. Create an Express application
  const app = expressJS();

    //Express.js * route handler * that responds to HTTP GET requests
        // (It handles a GET request to a specific URL path)
        
// 3. Define a route
app.get('/', (req, res) => {            // get route simple page (get route) // '.get'  use to get page 
  res.send('<h1>Hello, Express!</h1>');          // Sends data in the response body like resp.write()
});

app.get('/home', (req, res) => {            // get route home page 
    res.send('Hello, Home Page!');          // Sends data in the response body like resp.write()
  });

app.get('/about', (req, res) => {            // get route about page
    res.send('<b>Hello, About-Us Page!</b>');          // Sends data in the response body like resp.write()
  });

app.get('/contact', (req, res) => {            // get route about page
    res.send('<i>Hello, Contact-Us Page!</i>');          // Sends data in the response body like resp.write()
  });

// 4. Start the server (port)
        // app.listen(5000);
        // OR
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on XXXXXXXXXXXXXXXX:${port}`);         // CMD message when server start.
});


// node .\15_Express_JS.js

// nodemon .\15_Express_JS.js     // 

// http://localhost:5000/
// http://localhost:5000/home
// http://localhost:5000/about
// http://localhost:5000/contact


// Routing





// Express() and Key Methods
    // 1️⃣ What is const app = express();
        // express() creates an instance of an Express application.
        // This app object is used to define routes, middleware, and server settings.
            // const express = require('express');
            // const app = express();

    // 2️⃣ Understanding :

        //    Method	            Description
        //    app.set()	        Used to set configuration settings for the Express app.
        //    app.use()	        Used to add middleware functions (like express.json() for parsing JSON).
        //    app.get()	        Defines a route for handling HTTP GET requests.
        //    app.post()	      Defines a route for handling HTTP POST requests.
        //    app.listen()	    Starts the server and listens for incoming requests.

    // 3️⃣ Simple Example Using These Methods

        // 🔹 1. app.set() - Set a custom setting
            // app.set('appName', 'My Express App');
            // console.log('App Name:', app.get('appName'));

                // app.set('appName', 'My Express App')
                    // Sets a configuration value (appName).
                    // You can retrieve it using app.get('appName').

                // app.set() → Used for setting values in the Express app.


        // 🔹 2. app.use() - Middleware (Runs before route handlers)
            // app.use(express.json()); // Parses JSON body in requests

            // app.use((req, res, next) => {
            //     console.log(`Incoming request: ${req.method} ${req.url}`);
            //     next(); // Pass control to the next middleware or route
            // });

                // app.use(express.json())
                    // Middleware that allows Express to parse JSON body data in incoming requests.

                // Custom Middleware (app.use((req, res, next) => {...}))
                    // Runs before any route.
                    // Logs the request method (GET, POST) and URL.

                // app.use() → Used for middleware (e.g., parsing JSON, logging requests)


        // 🔹 3. app.get() - Route for GET request
            // app.get('/', (req, res) => {
            //     res.send('Hello, Express!');
            // });

                // Route Handlers:
                    // app.get('/'): Returns "Hello, Express!" when accessed in a browser.

                //  app.get() → Handles GET requests (e.g., serving web pages).



        // 🔹 4. app.post() - Route for POST request
            // app.post('/data', (req, res) => {
            //     res.send(`Received data: ${JSON.stringify(req.body)}`);
            // });

                // Route Handlers:
                    // app.post('/data'): Reads JSON data from the request body and sends it back.
      
                // app.post() → Handles POST requests (e.g., form submissions, APIs).



        // 🔹 5. app.listen() - Start server
            // app.listen(5000, () => {
            //     console.log('Server running at http://localhost:5000');
            // });

                // app.listen(5000, () => {...})
                    // Starts the Express server on port 5000.

                // app.listen() → Starts the Express server.



                

    // 5️⃣ Running This Example :
        //  Start the server  :   node server.js
        //  Test in Browser   :   http://localhost:5000/ 
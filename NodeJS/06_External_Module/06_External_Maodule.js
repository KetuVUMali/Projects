// Examples of External Modules : express, lodash, axios, chalk

// a. lodash
    //lodash is a utility library for JavaScript, providing helpful functions for manipulating arrays, objects, & strings.
    // Installation
    // npm install lodash
    const _ = require('lodash');
    const numbers = [1, 2, 3, 4];
    const doubled = _.map(numbers, (num) => num * 2);
    console.log(doubled); // Output: [2, 4, 6, 8]

// b. 
// express	    A web framework for building APIs and web applications.
// mongoose	    Handles MongoDB operations in Node.js.
// nodemon	    Monitors file changes and restarts the server automatically.
// dotenv	    Loads environment variables from a .env file.
// cors	        Manages Cross-Origin Resource Sharing (CORS) policies.
// jsonwebtoken (JWT)	Handles authentication using JSON Web Tokens.
// bcryptjs	    Hashes and compares passwords securely.
// multer	    Handles file uploads in Node.js applications.
// morgan	    Logs HTTP requests to the console.
// body-parser	Parses incoming JSON and URL-encoded request bodies.
// axios	    Makes HTTP requests from Node.js applications.
// moment	    Handles date and time operations.
// chalk	    Styles and colors console output.
// winston	    Implements advanced logging in Node.js.
// socket.io	Enables real-time communication via WebSockets.



//   Category	              Type	                    Example Modules
// Core Modules	            Global	            console, process, __dirname, setTimeout()
// Core Modules	            Non-Global	        fs, http, path, url, os, crypto, events
// External Modules	        Third-Party	        express, mongoose, nodemon, dotenv, bcryptjs, morgan
// 21_MiddleWare.js

// 🚀 MiddleWare
    // Middleware is use with Routes
    // Middleware adds custom logic(function)  before sending a response.
    // It is a function work between request & responsecs for do something changes betwwen. 
    // It can modify, filter, or process the request before sending a response.
    // It helps with Check User logged or Not, authentication, error handling, Check 18+ or Not, Ban Website for specific country,  etc.
    // middleware are functions is only use with Routes to access & modify req-resp for authotication(restrictions). 
    // middleware is a function that has access to the request and response object
        // 1. It can execute any code
        // 2. It can make changes to the request and response objects
        // 3. It can end the request-response cycle
        // 4. It can call the next middleware function in the stack

    // 🔹 How Middleware Works?
        // 1️⃣ Client makes a request →
        // 2️⃣ Middleware runs (can modify request/response) →
        // 3️⃣ Next middleware (if any) →
        // 4️⃣ Final Response is sent


// 🟢 Application-Level Middleware  : applay on all Routes Or specific routes. (Globaly apply)
        const express = require('express');
        const app = express();

        //Create  Middleware function
            const reqFilter = (req, res, next) => {                // 
                    if( !req.query.age)                                 // age not present
                        {
                            res.send('Please provide age...!');
                        }
                    else if(req.query.age < 18)                         // age present and condition
                        {
                            res.send('You are under Age...!     Age 18+...!');                    
                        }
                    else
                        {
                            next();         // next() is used to call next middleware function in the stack.
                        }                   // next() call after all routes
                };

            app.use(reqFilter);             //  Apply Middleware Globally
                                            // applies the middleware to all routes (/ and /user).
                                            // This ensures that every request must pass the reqFilter check before accessing any page.
                                            // use  for Avoids Code Duplication.
       

                                            
 // http://localhost:5000/                      // Please provide age...!
 // http://localhost:5000/user                  // Please provide age...!

 // http://localhost:5000/?age=10               // You are under Age...! Age 18+...!
 // http://localhost:5000/user?age=10           // You are under Age...! Age 18+...!

 // http://localhost:5000/?age=19               // Welcome User Page...!
 // http://localhost:5000/user?age=19           // Welcome User Page...!




        app.get('/', (req, res) => {
            res.send('Welcome Home Page...!');
        });
        
        // Serve the contact page
        app.get('/user', (req, res) => {
            res.send('Welcome User Page...!');
        });

        app.listen(5000);   
        
        
        // 📌 Types of Middleware
            // Application-Level Middleware   :  Applied to the entire application or specific routes. (Runs on all or specific routes in an app)  (Runs globally for all routes)
            // Router-Level Middleware        :  Attached to an instance of express.Router(). (Used with Express Router for specific routes)        (Runs only for specific routes)
            // Built-In Middleware            :  Provided by Express (e.g., express.json()).  (Pre-defined middleware in Express (e.g., express.json()) ) (Express features like express.json())
            // Third-Party Middleware         :  Libraries like cors, body-parser, etc.   Installed using npm (e.g., morgan, cors, body-parser)  (Installed from npm (e.g., morgan, cors))
            // Error-Handling Middleware      :  Specifically for handling errors.  Handles errors in Express (err, req, res, next)   (Manages errors in Express)
        
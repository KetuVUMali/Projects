// 22_Router_Level_Middleware.js


// Router-level middleware
        // Apply on Signle,specific, Group Routes.
        // Router-level middleware is specific to routes that are handled
        // used to handles specifics routes (Apply on single, group, all  Routes)
        // apply middleWere on sepcific or group route.


        // 1. create a router
        // 2. register a route
        // 3. apply middleware to route
        // 4. define route handler

        const express = require('express');
        const app = express();

        // Middleware function
            // This Middleware function we can import from another file also. 
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

        // app.use(reqFilter);              // Apply Route Global ( Means Apply On All Routes )

        app.get('/', (req, res) => {
            res.send('Welcome Home Page...!');
        });
        
        // applay autication only User Page
        app.get('/user', reqFilter,(req, res) => {
            res.send('Welcome User Page...!');
        });

        app.get('/about', (req, res) => {
            res.send('Welcome About Page...!');
        });

        app.listen(5000);   

        
 // http://localhost:5000/                      // Welcome Home Page...!
 // http://localhost:5000/user                  // Please provide age...!
 // http://localhost:5000/about                 // Welcome About Page...!
 

 // http://localhost:5000/?age=10               // Welcome Home Page...!
 // http://localhost:5000/user?age=10           // You are under Age...! Age 18+...!
 // http://localhost:5000/about?age=10          // Welcome About Page...!


 // http://localhost:5000/?age=19               // Welcome Home Page...!
 // http://localhost:5000/user?age=19           // Welcome User Page...!
 // http://localhost:5000/about?age=19          // Welcome About Page...!




 // Make group route
    // Means make Group Routing apply on Specific or Group Routes
        
        // const groupRoute = express.Router();               // assign reqFilter middlerware to Group var (groupRoute is new var)

            // app.get('/', (req, res) => {
            //     res.send('Welcome Home Page...!');
            // });

        // Route apply on user and about Page 
            // groupRoute.get('/user', (req, res) => {
            //     res.send('Welcome User Page...!');
            // });

            // groupRoute.get('/about', (req, res) => {
            //     res.send('Welcome About Page...!');
            // });
 
           // app.use('/', groupRoute);        // apply groupRoute on all selected routes means On about & user Page.

        






// Middleware function Import Export 
    // Means Create Middleware function into another file & use it.

        // 1. Create a file for Middleware function
                    // Ex.  middleware.js
                    // module.exports =  reqFilter ={ ...logic... }

        // 2. Import Middleware function 
                    // Ex. services.js
                    // const reqFilter = require('./middleware');





//🎯 Application-Level Middleware
            // Runs for the entire app.
            // Middleware that runs for all or specific routes in the entire app.


//🎯 Router-Level Middleware
            // Runs only for a specific route group.
            // Middleware that applies only to specific route groups using express.Router().
            













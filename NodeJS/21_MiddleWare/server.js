// This Express.js application uses middleware to check if the user is 18+ before allowing access to the home page.


        // 📌 Folder Structure
        //     project-folder
        //      │── public                # Contains CSS files
        //      │    ├── style.css         # Internal styling for the page
        //      │── views                 # EJS templates folder
        //      │    ├── home.ejs          # Home page template
        //      │    ├── notAdult.ejs      # Not adult message page
        //      │── server.js             # Main Express application



        const express = require('express');
        const path = require('path');
        
        const app = express();
        
        
        // Set EJS as the template engine
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'views'));
        
        // Serve static files (CSS)
        app.use(express.static(path.join(__dirname, 'public')));
        
        // Middleware to check if the user is 18+
        const checkAgeMiddleware = (req, res, next) => {
            const age = parseInt(req.query.age); // Get age from URL query params
        
            if (!age) 
                {
                    return res.send("Please enter your age in the URL like: /?age=18");
                }
            else if (age >= 18) 
                {
                    next(); // If 18+, proceed to the home page
                } 
            else 
                {
                    res.render('notAdult'); // If under 18, show message
                }
        };
        
        // Apply Middleware for home page route
        app.get('/', checkAgeMiddleware, (req, res) => {
            res.render('home'); // Render home.ejs if user is 18+
        });
        
        // Start the Server
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        


// nodemon .\server.js

    // ✅ To Test if the User is 18+
        // http://localhost:3000/?age=18       =>    🚀 You will see the Home Page 🎉

    // ❌ To Test if the User is Under 18
        // http://localhost:3000/?age=17       =>    🚫 You will see Access Denied ❌ 




        // 📌 Explanation of How It Works
            // 1️⃣ User enters their age in the URL (e.g., ?age=18).
            // 2️⃣ The middleware (checkAgeMiddleware) checks the age.
            // 3️⃣ If age >= 18, it allows access to the home page (home.ejs).
            // 4️⃣ If age < 18, it redirects to a page saying "You are not an adult" (notAdult.ejs).
            // 5️⃣ CSS makes the design attractive.


        // 📌 Summary
            // ✅ Used Middleware to check age before accessing the home page.
            // ✅ Implemented EJS Templates for dynamic pages.
            // ✅ Styled the page with an attractive design.
            // ✅ Easy and beginner-friendly project! 🎉







// When to Use Which Middleware?
    //   Middleware Type	                When to Use?	                                                    Example
    // Application-Level	    When you want to check/log something for all or multiple routes	        User Authentication, Logging Requests
    // Router-Level	            When using multiple routers for better organization	                    Creating different modules (e.g., users.js, products.js)
    // Built-in	                When using default Express features	                                    express.json() to handle JSON requests
    // Third-Party	            When using an external package to add features	                        cors for cross-origin requests, morgan for logging
    // Error-Handling	        When you need to catch and handle errors	                            Handling 404 errors, Internal Server Errors





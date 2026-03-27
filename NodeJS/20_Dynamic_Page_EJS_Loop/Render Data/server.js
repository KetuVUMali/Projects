// Dynamic Pages in Express.js Using EJS 
        // 📌 What is EJS?
            // EJS (Embedded JavaScript) is a templating engine that allows you to embed JavaScript into HTML.
            // It helps create dynamic pages by injecting data into templates.

        // 1️⃣ Install Express and EJS
            // npm init -y   # Initialize Node.js project
            // npm install express ejs  # Install Express and EJS

        // 2️⃣ Folder Structure
            // project/
            //  │── views/              # Folder for EJS templates
            //  │    ├── home.ejs        # Home page template
            //  │    ├── about.ejs       # About page template
            //  │    ├── users.ejs       # Dynamic user list page
            //  ├── public/             # Static files (CSS, images)
            //  ├── server.js           # Main Express file


// 🔹 Multiple Ways to Render Dynamic Pages

    const express = require('express');
    const app = express();

    // Set EJS as the templating engine
    app.set('view engine', 'ejs');

        // ✅ Method 1: Sending Simple Data to a Template  (Simple Data)
            // Define a route that renders an EJS page with dynamic data
                app.get('/', (req, res) => {
                    const title = "Welcome to My Website Ketan...!";
                    res.render('home', { title });
                })

                    // The server sends the title variable to home.ejs.
                    // <%= title %> injects the value into HTML.


            
        // ✅ Method 2: Passing Multiple Variables  (Multiple Variables)
            // 
                app.get('/about', (req, res) => {
                    res.render('about', { 
                        pageTitle: "About Us", 
                        company: "XYZ Pvt. Ltd." 
                    });
                });

                    // When visiting http://localhost:3000/about, it will show:
                    // op ->
                            // About Us
                            // We are XYZ Pvt. Ltd.


        
        // ✅ Method 3: Rendering an Array/List of Data  (List Rendering)
                    app.get('/users', (req, res) => {
                        const users = [
                            { name: "Ketan", age: 25 },
                            { name: "Rahul", age: 22 },
                            { name: "Ganesh", age: 28 }
                        ];
                        res.render('users', { users });
                    });

                    // op->
                            // User List
                            // - Ketan - 25 years old
                            // - Rahul - 22 years old
                            // - Ganesh - 28 years old

                    // <% %> → Runs JavaScript code inside EJS.
                    // <%= %> → Outputs data inside HTML.



        // ✅ Method 4: Rendering Data from URL (URL Query Parameters) (Passing dynamic data via URL)
                app.get('/profile', (req, res) => {
                    const user = {
                        name: req.query.name || "Guest",        // If URL Data not present then "Guest" Display
                        age: req.query.age || "Unknown"
                    };
                    res.render('profile', { user });
                });
        
                // http://localhost:3000/profile?name=Ketan&age=25
                    // op ->
                            // Welcome, Ketan!
                            // Age: 25

                // http://localhost:3000/profile
                    // op ->
                            // Welcome, Guest!
                            // Age: Unknown


// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
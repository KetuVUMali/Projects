// services.js  (index.js)



const express = require('express');
const app = express();
const path = require('path');       // used to access project folder path

// Serve static files from the "public" folder
    app.use(express.static('public'));              // 'public'  .html file folder
                                                    // static()   used to access or load static files.
                                                    // express.static()  method of express to load static web-pages

// Serve the home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));     // join all file in directiory path.
    });
        // same (or)
            // const publicPath = path.join(__dirname, 'public');
            // app.get('/', (req, res) => {
            //     res.sendFile(`${publicPath}/index.html`);
            // });


// Serve the about page
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'about.html'));
    });

// Serve the contact page
    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'contact.html'));
    });

// Handle undefined routes (404 page)
    app.use('*',(req, res) => {
        res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    });

        // same (OR)
            // app.use('*',(req, res) => {
            //          res.sendFile(path.join(__dirname, 'public', '404.html'));
            //   });

        // same (OR)
            // app.use((req, res) => {
            //     res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
            // });

// Start the server
    app.listen(5000, () => {
        console.log('Server is running on http://localhost:5000');
    });





// 404 Page : Page Not Exists 
// Remove Extension from url : 
// how to get or Display page 
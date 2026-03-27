// services.js  (index.js)

// Same header applay all Pages.

const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');


// Home route
app.get('/', (req, res) => {
    res.render('home');                     // file name
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Contact route (optional)
app.get('/contact', (req, res) => {
    res.render('contact');
});


// Start the server
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});

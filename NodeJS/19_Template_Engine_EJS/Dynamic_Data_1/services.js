// services.js  (index.js)



const express = require('express');
const app = express();
const path = require('path');       // used to access project folder path


// Set (.set) EJS template engine (Express js connect with ejs)
app.set('view engine', 'ejs');          // 'view engine' used
                                        // 'ejs' package name
                                        // When we use any "view engine" that time we make "View" folder for Dynamic files it is by default configration.

// Serve the Profile page
app.get('/profile', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 30,
        city: 'New York',
        hobbies: ['reading', 'swimming', 'coding']
    };
    res.render('profile',{user});       // send 'user' object data to profile.ejs page

   //res.render('profile');              // render used to access 'profile.ejs' file  (page name)
}); 


// Simple Static Pages Display

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));     // join all file in directiory path.
});

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



// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

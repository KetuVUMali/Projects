// services.js  (index.js)



const express = require('express');
const app = express();
const path = require('path');       // used to access project folder path


// Set (.set) EJS template engine
app.set('view engine', 'ejs');          // 'view engine' used
                                        // 'ejs' package name


// Serve the Profile page
app.get('/profile', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 30,
        city: 'New York',
        hobbies: ['reading', 'swimming', 'coding','basketboll','running']
    };
    res.render('index',{user});

   //res.render('profile');              // render used to access 'profile.ejs' file  (page name)
}); 



// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});


// http://localhost:5000/profile
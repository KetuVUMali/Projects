// services.js  (index.js)



const express = require('express');
const app = express();
const path = require('path');       // used to access project folder path


// Set (.set) EJS template engine
app.set('view engine', 'ejs');          // 'view engine' used
                                        // 'ejs' package name

// Sample data to be passed to the template
const products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'Headphones', price: 199, category: 'Accessories' },
    { name: 'Coffee Maker', price: 49, category: 'Appliances' },
    { name: 'Book', price: 19, category: 'Books' }
];

// Serve the Profile page
app.get('/profile', (req, res) => {
    res.render('profile',{products});        // Passing the products array to the template
}); 



// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});


// http://localhost:5000/profile
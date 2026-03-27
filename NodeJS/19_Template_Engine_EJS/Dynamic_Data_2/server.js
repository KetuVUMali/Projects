
// project
// ├── views                  # Templates folder (dynamic file folder)
// │   ├── users.ejs          # Users page template
// ├── public                 # Folder for static files (CSS, JS, images)
// │   ├── style.css          # Example CSS file
// ├── server.js              # Main server file




const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));        // Apply CSS File TO Dynamic File

// Route to render the users page
app.get('/users', (req, res) => {
    const users = [
        { name: "Ketan", age: 25, email: "ketan@example.com" },
        { name: "Anil", age: 30, email: "anil@example.com" },
        { name: "Sita", age: 27, email: "sita@example.com" }
    ];
    
    res.render('users', { usersList: users });  // Passing data to the template
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000/users');
});



// nodemon .\server.js

// 📌 Visit in Browser:
// 🔗 http://localhost:5000/users
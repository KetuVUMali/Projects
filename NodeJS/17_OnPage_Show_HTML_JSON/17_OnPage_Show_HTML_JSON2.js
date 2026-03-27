// 17_OnPage_Show_HTML_JSON.js

// JSON Data On WebPage!

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const jsonData = {
        name: 'Ketan',
        age: 23,
        skills: ['Node.js', 'Express.js', 'JavaScript']
    };

    res.json(jsonData);                                     // res.json() for JSON responses.
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
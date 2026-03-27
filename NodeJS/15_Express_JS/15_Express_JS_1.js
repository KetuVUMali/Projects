// 15_Express_JS_1.js

// 📌
    // ☠️ Dont Try To Run, It's Give Error
    // 👻 It Is For Only Example
    //❌🚫 Handling Different HTTP Methods 🚫❌

const express = require('express');
const app = express();
        // both 'express' are always same...!
        // 'express' is var at first & second a method


app.get('/data', (req, res) => {
    res.send('This is a GET request ( Retrieve data ) ');
});

app.post('/data', (req, res) => {
    res.send('This is a POST request  ( Create new data )');
});

app.put('/data', (req, res) => {
    res.send('This is a PUT request  ( Update existing data ) ');
});

app.delete('/data', (req, res) => {
    res.send('This is a DELETE request  ( Remove data ) ');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

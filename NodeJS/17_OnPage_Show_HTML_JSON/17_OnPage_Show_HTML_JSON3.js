// 17_OnPage_Show_HTML_JSON2.js


// HTML and JSON Both

const express = require('express');
const app = express();

app.get('/response', (req, res) => {
    const responseType = req.query.type; // Get type from query string

    if (responseType === 'html') 
        {
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Dynamic Response</title>
                </head>
                <body>
                    <h1>Welcome to the Dynamic Response Page</h1>
                    <p>This is HTML content.</p>
                </body>
                </html>
            `;
            res.send(htmlContent);
        } 
    else if (responseType === 'json') 
        {
            const jsonData = {
                                message: 'This is a JSON response',
                                status: 'success',
                                data: {
                                            name: 'Ketan',
                                            age: 23
                                      }
            };
            res.json(jsonData);
        } 
    else 
        {
            res.status(400).send('Please specify a valid type: html or json');
        }
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



// Use res.send() for basic HTML responses.
// Use res.json() for JSON responses.

// Access URL for HTML: http://localhost:3000/response?type=html
// Access URL for JSON: http://localhost:3000/response?type=json
// Access URL for Invalid Input: http://localhost:3000/response
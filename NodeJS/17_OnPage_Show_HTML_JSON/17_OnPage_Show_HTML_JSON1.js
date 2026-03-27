// 17_OnPage_Show_HTML_JSON1.js


// HTML On Web Page
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const htmlContent = `
                            <!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>HTML Response</title>
                            </head>
                            <body>
                                <h1 style="color:red;">Welcome to Node.js!</h1>
                                <p>This is an HTML response rendered by Express.js.</p>
                            </body>
                            </html>
                        `;
    res.send(htmlContent);                      // res.send() for basic HTML responses.
});


app.get('/home', (req, res) => {
    res.send( `                                 
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>HTML Response</title>
                    </head>
                    <body>
                        <h1 style="color:blue;">Welcome to Node.js!</h1>
                        <p>This is an HTML response rendered by Express.js.</p>
                    </body>
                </html>
            `);         
});



// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});




// http://localhost:3000/
// http://localhost:3000/home
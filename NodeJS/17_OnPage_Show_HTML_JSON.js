// 17_OnPage_Show_HTML_JSON.js

    // Show == Render

// Rendering HTML and JSON 
    // HTML  -  Website
    // JSON  -  API 


const expressJS = require('express');

const app = expressJS();

// Simple Page
    app.get('/', (req, res) => {             
        res.send('Hello, Express!');          
    });

// HTML On Web - Page

    app.get('/home1', (req, res) => {             
        res.send('<h1> Home Page 1 </h1>');          
    });

    app.get('/home2', (req, res) => {
        res.write('<h1> Home Page </h1>');
        res.write('<p> Welcome to Home Page 2</p>');
        res.send();
    });


    app.get('/home3', (req, res) => {
        res.write('<h1> Home Page </h1>');
        res.write('<p> Welcome to Home Page 3</p>');
        res.send();
    });


    app.get('/home4', (req, res) => {
        res.send(` <label> Name : <input type="text" placeholder="User Name">
                    <br><br>
                    <button> Submit </button>
                `);
    });



    app.get('/home5', (req, res) => {             
        res.send(`
                    <h1> Home Page 1 </h1> 
                    <a href="/"> Main Page</a
                `);          
    });


// JSON On Page

    app.get('/about1', (req, res) => {             
        res.send({
                    name: 'Ketan',
                    age: 23,
                    skills: ['Node.js', 'Express.js', 'JavaScript']
                });          
    });

    app.get('/about2', (req, res) => {             
        res.send([
            { name: "A", rollNo : 1},
            {name: "B", rollNo : 2},
            { name: "C", rollNo : 3}
        ]);          
    });


// to get value from url   (query parameter data)
app.get('/url', (req, res) => {
    res.send(` <label> Name : <input type="text" placeholder="User Name" value="${req.query.name}">
                <br><br>
                <button> Submit </button>
            `);
});

app.listen(5000);







// http://localhost:5000/

// http://localhost:5000/home1
// http://localhost:5000/home2
// http://localhost:5000/home3
// http://localhost:5000/home4
// http://localhost:5000/home5

// http://localhost:5000/about1
// http://localhost:5000/about2

// http://localhost:5000/url
// http://localhost:5000/url?name=Ketan

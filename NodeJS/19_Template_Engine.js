// 19_Template_Engine.js


// Template Engine
    // Display Dynamic Data (DB data, web pages)
    // A template engine in Node.js allows you to dynamically generate HTML by combining data and templates. 
    // It helps create dynamic, server-rendered web pages and separates the logic from the presentation layer.
    // Some popular template engines in the Node.js ecosystem include EJS, Pug (formerly Jade), and Handlebars.
        // A Template Engine is used to create dynamic web pages in Node.js (Express.js). 
        // It helps generate HTML dynamically by injecting data into templates.


    // Why Use a Template Engine?
        // ✔️ Dynamic Content        :    Populate HTML templates with dynamic data.
        // ✔️ Reusable Components    :    Reuse parts of a page (like headers, footers, etc.).
        // ✔️ Separation of Concerns :    Separate application logic (Node.js) from presentation logic (HTML). [Separates HTML and Business Logic - Keeps code clean.]
        // ✔️ Reduces duplicate code – No need to write multiple HTML files. [Use the same template multiple times with different data.]
        // ✔️ Makes HTML dynamic – Insert values from a database or user input.
        // ✔️ Easier to manage large projects – Separates logic from UI.
        // ✔️ Faster Development - No need to manually create full HTML pages.
        // ✔️ Easier Maintenance - Change the template once, and it reflects everywhere.


    
    


    // static page : One time data store (Never Changable data or page)(not connect with DB)
    // dynamic page : Data will change (data will be change in every request)(connect with DB)


    // 🔹 Popular Template Engines for Express.js
            // 1. EJS (Embedded JavaScript)
            // 2. Pug (formerly Jade)
            // 3. Handlebars (HBS)



// make dynamic routing
// make dynamic page



// EJS
    // EJS is the most commonly used template engine.

    // install ejs template package  (npm package)  
        // install cmd : npm i ejs -g
        // make 'views' folder
        // add filew with '.ejs' extension (include file html code)

        // <%= %> load JS (=)
        // <%- %> html load (-)
    

    // Folder Structure :  
        //   project
        //      ├── views                  # Templates folder (dynamic file folder)
        //      │   ├── profile.ejs        # Profile page template
        //      ├── public                 # Folder for static files (CSS, JS, images)
        //      ├── server.js              # Main server file



// nodemon .\services.js
// http://localhost:5000/profile
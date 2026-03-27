// 01_Basic.js

var a = 10;
var b = 20;
var c = 30;

console.log(a+b+c);

// Run  CMD :   node .\01_Basic.js

// Node.js
    // Node.js is not lang.
    // This Is A Server Envirnment.
    // Node.js allows to run JS on the server side.
    // It is used to create server-side web applications.
    // Node.js connect with DB 
    // Node.js free, open-source
    // Node.js used Asynchronous program
    // Node.js File Extension   .js
    // Node.js use Chrome V8 Engine to excute code. (V8 egine wriiten in C++, c, JS)
    // we can Connect the same database with Web app and Mob App
    // Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).

// Do
    // Genrate dynamic page content.
    // Can create , delete, read, write, open, close files on server.
    // can perform CRUD operation on DB

// use
    // used for API
    // Connect same DB with Web app and Mob App

// Histroy
    // First release 27-may-2009
    // written in JS,C,C++

// Devloper Make 
    // Make API
    // Connect servert with client
    // Make Websites



// NPM 
    // Node Package Manager.
    // NPM is installed with Node.js

    // npm (Node Package Manager) is the default package manager for Node.js
    // used for installing, managing, and sharing JavaScript packages.
    // NPM is a package manager for Node.js packages, or modules.
    // NPM makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.


// Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).
// Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36.
// Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications.



    //                              Client & Server Sides

  //                   Client                                   Server
  //                                 --> Request --->
  //                                 <-- Responces <-- 
  //                 HTML,CSS,JS                            Node.Js, PHP, Java, Python



  // Run CMD 
        // node .\ File_Name.js



// NodeJS Interview Questions Ask in Interview By HR (Human Resource)
    // 1. What is Node.js?
    // 2. What is Node.js used for?
    // 3. What is the difference between Node.js and JavaScript?
    // 4. What is the V8 engine?
    // 5. What is an event loop in Node.js?
    // 6. What is a callback function in Node.js?
    // 7. What is the difference between synchronous and asynchronous programming?
    // 8. What is non-blocking I/O in Node.js?
    // 9. What is the purpose of the Node API (libuv)?
    // 10. What is the role of the callback queue in Node.js?
    // 11. What is the call stack in Node.js?
    // 12. What is the event loop in Node.js?
    // 13. What is the role of the V8 engine in Node.js?
    // 14. What is NPM?
    // 15. What is Express.js?
    // 16. What is MongoDB?
    // 17. What is Socket.IO?
    // 18. What is Mongoose?
    // 19. What is JWT?
    // 20. What is Nodemon?
    // 21. What is PM2?
    // 22. What is Passport.js?
    // 23. What is Sequelize?
    // 24. What is Axios?
    // 25. What is Jest?
    // 26. What is Webpack?
    // 27. What is ESLint?
    // 28. What is Prettier?
    // 29. What is Babel?
    // 30. What is Docker?
    // 31. What is Kubernetes?
    // 32. What is Redis?
    // 33. What is GraphQL?
    // 34. What is Next.js?
    // 35. What is Nest.js?
    // 36. What is Strapi?
    // 37. What is Prisma?
    // 38. What is Apollo Server?
    // 39. What is the AWS SDK?
    // 40. What is the Google Cloud Client Library?
    // 41. What is the Azure SDK?



    // 0️⃣ Why Use Node.js?
        // ✔ Fast & Scalable → Handles thousands of requests per second.
        // ✔ Non-Blocking I/O → Doesn't wait for slow tasks (like DB queries).
        // ✔ Real-time Applications → Ideal for chat apps, live notifications, etc.
        // ✔ Cross-Platform → Runs on Windows, Linux, MacOS.
        
        // 📌 Best Use Cases:
        
        // API Servers (REST, GraphQL)
        // Real-time Chat Applications
        // Streaming Services (Netflix-like apps)
        // File Handling & Automation
        

    // 1️⃣ How Node.js Works?
        // Step-by-Step Process:
            // 1. Receives a Request → A user sends a request (e.g., opening a webpage, fetching data).
            // 2. Checks If It’s Synchronous or Asynchronous
            //      -  If synchronous, executes immediately.
            //      -  If asynchronous, delegates the task (e.g., file read, database query).
            // 3. Uses Non-Blocking I/O → While waiting for async tasks, Node.js doesn’t stop; it keeps handling other tasks.
            // 4. Executes the Callback → When the async task finishes, Node.js processes the callback function and sends the response.


    // 2️⃣ Node.js Architecture 🏗️
        // Components:
            // 1️⃣ V8 Engine → Executes JavaScript code.
            // 2️⃣ Single Thread & Event Loop → Manages multiple requests efficiently.
            // 3️⃣ Node API (libuv) → Handles async operations (File System, DB, etc.).
            // 4️⃣ Callback Queue → Stores functions waiting to be executed.
            // 5️⃣ Call Stack → Tracks function execution.

        // How the Architecture Works (Flow)
            // User Request → Call Stack → Event Loop → Node API → Callback Queue → Response Sent


    // 3️⃣ Call Stack (Execution Order)
            // The call stack is where JavaScript keeps track of function execution.
            // It works on LIFO (Last In, First Out) principle.
            // When a function is called, it’s pushed onto the stack.
            // When a function finishes, it’s popped from the stack.

                // Example:
                        // function first() {
                        //     console.log("First function");
                        // }
                        
                        // function second() {
                        //     console.log("Second function");
                        // }
                        
                        // first();
                        // second();
                
                    // Execution Order:
                    //     1️⃣ first() is added to the call stack → Executes → Removed
                    //     2️⃣ second() is added to the call stack → Executes → Removed

                    // Output:
                            // First function
                            // Second function

    // 4️⃣ Callback Queue (Task Scheduling)
        // When an async task (like file reading) completes, its callback function is added to the Callback Queue.
        // The Event Loop takes the function from the queue and pushes it to the Call Stack when it’s empty.
                // Example:
                        // console.log("Start");

                        // setTimeout(() => {
                        //     console.log("Timeout callback");
                        // }, 2000);
                        
                        // console.log("End");

                    // Execution Order:
                        // 1️⃣ Start → Printed immediately
                        // 2️⃣ End → Printed immediately
                        // 3️⃣ Timeout callback → Printed after 2 seconds
                        


    // 6️⃣ Event Loop (Task Management)
        // The Event Loop is a continuous process that checks the Call Stack and Callback Queue.
        // If the Call Stack is empty, it takes the first function from the Callback Queue and pushes it to the Call Stack.
        // This process continues indefinitely, ensuring that the Node.js server is always responsive.




    // 7️⃣ Non-Blocking I/O (Async Operations)
        // Node.js uses non-blocking I/O operations to handle multiple requests simultaneously.
        // When an async task is executed, Node.js doesn’t wait for it to complete; it delegates the task and moves to the next request.
        // When the async task finishes, Node.js processes the callback function and sends the response.
        // This ensures that the server remains responsive and can handle thousands of requests concurrently.


    // 8️⃣ Single Thread (Event Loop)
        // Node.js runs on a single thread, but it uses an Event Loop to manage multiple requests.
        // The Event Loop is a continuous process that checks the Call Stack and Callback Queue.
        // If the Call Stack is empty, it takes the first function from the Callback Queue and pushes it to the Call Stack.
        // This process continues indefinitely, ensuring that the Node.js server is always responsive.


    // 9️⃣ V8 Engine (JavaScript Execution
        // Node.js uses the V8 Engine to execute JavaScript code.
        // The V8 Engine is an open-source JavaScript engine developed by Google for the Chrome browser.
        // It compiles JavaScript code into machine code, making it faster and more efficient.
        // Node.js uses the V8 Engine to execute JavaScript code on the server-side, enabling fast and scalable applications.


    // 1️⃣0️⃣ Node API (libuv)
        // Node.js uses the Node API (libuv) to handle asynchronous operations.
        // The Node API provides functions for file system operations, network requests, timers, and more.
        // When an async task is executed, Node.js delegates the task to the Node API, which manages the operation in the background.
        // When the task is complete, the Node API triggers the callback function, which sends the response to the client.


    // 1️⃣1️⃣ NPM (Node Package Manager)
        // NPM is the default package manager for Node.js.
        // It is used to install, manage, and share JavaScript packages.
        // NPM makes it easy for developers to share and reuse code, and it makes it easy to update the code that you're sharing.
        // NPM is a powerful tool for managing dependencies and building applications with Node.js.


    // 1️⃣2️⃣ Express.js (Web Framework)
        // Express.js is a popular web framework for Node.js.
        // It provides a simple and flexible way to build web applications and APIs.
        // Express.js is built on top of Node.js, making it easy to integrate with other Node.js modules and libraries.
        // Express.js is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 1️⃣3️⃣ MongoDB (Database)
        // MongoDB is a popular NoSQL database used with Node.js.
        // It is a document-oriented database that stores data in JSON-like documents.
        // MongoDB is widely used for building web applications, APIs, and server-side applications with Node.js.
        // MongoDB is easy to scale, flexible, and provides high performance for Node.js applications.


    // 1️⃣4️⃣ Socket.IO (Real-Time Communication)
        // Socket.IO is a real-time communication library for Node.js.
        // It enables real-time, bidirectional communication between web clients and servers.
        // Socket.IO is widely used for building chat applications, live notifications, and real-time games with Node.js.
        // Socket.IO provides a simple and flexible API for building real-time applications with Node.js.


    // 1️⃣5️⃣ Mongoose (MongoDB ORM)
        // Mongoose is an Object-Document Mapping (ODM) library for MongoDB and Node.js.
        // It provides a simple and flexible way to interact with MongoDB databases in Node.js applications.
        // Mongoose simplifies the process of defining schemas, validating data, and performing CRUD operations with MongoDB.
        // Mongoose is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 1️⃣6️⃣ JWT (JSON Web Tokens)     
        // JWT (JSON Web Tokens) is a compact, URL-safe means of representing claims to be transferred between two parties.
        // It is widely used for authentication and authorization in web applications, APIs, and server-side applications with Node.js.
        // JWT provides a secure way to transmit information between parties, ensuring data integrity and authenticity.
        // JWT is easy to use, flexible, and widely supported in Node.js applications.


    // 1️⃣7️⃣ Nodemon (Development Tool)        
        // Nodemon is a development tool for Node.js applications.
        // It automatically restarts the Node.js server when changes are detected in the code.
        // Nodemon is widely used for developing and testing Node.js applications, making the development process faster and more efficient.
        // Nodemon provides a simple and flexible way to monitor changes in Node.js applications and automatically restart the server.


    // 1️⃣8️⃣ PM2 (Process Manager)
        // PM2 is a production process manager for Node.js applications.
        // It provides a simple and flexible way to manage Node.js processes in production environments.
        // PM2 is widely used for deploying, monitoring, and scaling Node.js applications, ensuring high availability and performance.
        // PM2 provides a powerful set of features for managing Node.js applications in production environments.


    // 1️⃣9️⃣ Passport.js (Authentication)
        // Passport.js is an authentication middleware for Node.js applications.
        // It provides a simple and flexible way to authenticate users in web applications, APIs, and server-side applications.
        // Passport.js supports multiple authentication strategies, including local, social, and third-party providers.
        // Passport.js is widely used for building secure and scalable authentication systems with Node.js.


    // 2️⃣0️⃣ Sequelize (ORM)
        // Sequelize is an Object-Relational Mapping (ORM) library for Node.js applications.
        // It provides a simple and flexible way to interact with relational databases in Node.js applications.
        // Sequelize simplifies the process of defining models, associations, and performing CRUD operations with databases.
        // Sequelize is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 2️⃣1️⃣ Axios (HTTP Client)
        // Axios is a popular HTTP client for Node.js applications.
        // It provides a simple and flexible way to make HTTP requests to external APIs and services.
        // Axios supports multiple features, including request and response interception, error handling, and request cancellation.
        // Axios is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 2️⃣2️⃣ Jest (Testing Framework)
        // Jest is a popular testing framework for Node.js applications.
        // It provides a simple and flexible way to write and run tests for Node.js applications.
        // Jest supports multiple features, including test suites, assertions, mocks, and code coverage.
        // Jest is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 2️⃣3️⃣ Webpack (Module Bundler)
        // Webpack is a popular module bundler for Node.js applications.
        // It provides a simple and flexible way to bundle JavaScript files, CSS files, and other assets into a single file.
        // Webpack supports multiple features, including code splitting, tree shaking, and hot module replacement.
        // Webpack is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 2️⃣4️⃣ ESLint (Code Linter)
        // ESLint is a popular code linter for Node.js applications.
        // It provides a simple and flexible way to enforce coding standards and best practices in JavaScript code.
        // ESLint supports multiple features, including rules, plugins, and custom configurations.
        // ESLint is widely used for maintaining code quality and consistency in Node.js applications.


    // 2️⃣5️⃣ Prettier (Code Formatter)
        // Prettier is a popular code formatter for Node.js applications.
        // It provides a simple and flexible way to format JavaScript code automatically.
        // Prettier supports multiple features, including code formatting, code quality, and code consistency.
        // Prettier is widely used for maintaining code quality and consistency in Node.js applications.


    // 2️⃣6️⃣ Babel (JavaScript Compiler)
        // Babel is a popular JavaScript compiler for Node.js applications.
        // It provides a simple and flexible way to compile modern JavaScript code into backward-compatible code.
        // Babel supports multiple features, including transpiling, polyfilling, and transforming JavaScript code.
        // Babel is widely used for building web applications, APIs, and server-side applications with Node.js.


    // 2️⃣7️⃣ Docker (Containerization) 
        // Docker is a popular containerization platform for Node.js applications.
        // It provides a simple and flexible way to package, distribute, and run Node.js applications in containers.
        // Docker supports multiple features, including containers, images, and registries.
        // Docker is widely used for deploying, scaling, and managing Node.js applications in production environments.


    // 2️⃣8️⃣ Kubernetes (Container Orchestration)
        // Kubernetes is a popular container orchestration platform for Node.js applications.
        // It provides a simple and flexible way to deploy, scale, and manage Node.js applications in production environments.
        // Kubernetes supports multiple features, including pods, services, and deployments.
        // Kubernetes is widely used for automating, managing, and scaling Node.js applications in production environments.


    // 2️⃣9️⃣ Redis (In-Memory Database)    
        // Redis is a popular in-memory database used with Node.js applications.
        // It is a key-value store that stores data in memory for fast access.
        // Redis is widely used for caching, session management, and real-time analytics in Node.js applications.
        // Redis is easy to use, scalable, and provides high performance for Node.js applications.


    // 3️⃣0️⃣ GraphQL (API Query Language)
        // GraphQL is a popular API query language for Node.js applications.
        // It provides a simple and flexible way to query and manipulate data in web applications and APIs.
        // GraphQL supports multiple features, including queries, mutations, and subscriptions.
        // GraphQL is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣1️⃣ Next.js (React Framework)
        // Next.js is a popular React framework for Node.js applications.
        // It provides a simple and flexible way to build server-side rendered React applications.
        // Next.js supports multiple features, including pages, routing, and data fetching.
        // Next.js is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣2️⃣ Nest.js (Node Framework)
        // Nest.js is a popular Node framework for building scalable and efficient server-side applications.
        // It provides a simple and flexible way to build web applications, APIs, and microservices with Node.js.
        // Nest.js supports multiple features, including modules, controllers, and providers.
        // Nest.js is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣3️⃣ Strapi (Headless CMS) 
        // Strapi is a popular headless CMS for Node.js applications.
        // It provides a simple and flexible way to create, manage, and deliver content in web applications and APIs.
        // Strapi supports multiple features, including content types, plugins, and roles.
        // Strapi is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣4️⃣ Prisma (Database Toolkit) 
        // Prisma is a popular database toolkit for Node.js applications.
        // It provides a simple and flexible way to interact with databases in web applications and APIs.
        // Prisma supports multiple features, including queries, mutations, and subscriptions.
        // Prisma is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣5️⃣ Apollo Server (GraphQL Server)
        // Apollo Server is a popular GraphQL server for Node.js applications.
        // It provides a simple and flexible way to build and deploy GraphQL APIs in web applications and server-side applications.
        // Apollo Server supports multiple features, including queries, mutations, and subscriptions.
        // Apollo Server is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣6️⃣ AWS SDK (Cloud Services)
        // AWS SDK is a popular cloud services toolkit for Node.js applications.
        // It provides a simple and flexible way to interact with Amazon Web Services (AWS) in web applications and APIs.
        // AWS SDK supports multiple features, including storage, compute, and networking services.
        // AWS SDK is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣7️⃣ Google Cloud Client Library (Cloud Services)
        // Google Cloud Client Library is a popular cloud services toolkit for Node.js applications.
        // It provides a simple and flexible way to interact with Google Cloud Platform (GCP) in web applications and APIs.
        // Google Cloud Client Library supports multiple features, including storage, compute, and networking services.
        // Google Cloud Client Library is widely used for building web applications, APIs, and server-side applications with Node.js.



    // 3️⃣8️⃣ Azure SDK (Cloud Services)
        // Azure SDK is a popular cloud services toolkit for Node.js applications.
        // It provides a simple and flexible way to interact with Microsoft Azure in web applications and APIs.
        // Azure SDK supports multiple features, including storage, compute, and networking services.
        // Azure SDK is widely used for building web applications, APIs, and server-side applications with Node.js.



// ✅ Node.js uses Single Thread + Event Loop for fast performance
// ✅ Handles multiple requests without blocking
// ✅ Uses Call Stack, Node API, and Callback Queue for execution
// ✅ Best for Real-time Applications, APIs, and Streaming Services
// 06_External_Module.js

// 2. External Modules
    // External modules are not part of Node.js by default. 
    // They are created (install) by developers and shared on the npm (Node Package Manager) registry.

    // How to Use External Modules
        // Install the Module: Use npm install <module-name> in the terminal.
        // Require the Module: Use require('<module-name>') in your code.







    // To use external modules, you need to install them using npm (Node Package Manager).

// To install an external module, you can use the npm install command followed by the module name.
// For example, to install the 'validator' module, you would run:
// npm install validator

// After installing an external module, you can use it in your Node.js application by requiring it using the require() function.
// For example, to use the 'validator' module in your application, you would include the following code:
    //const validator = require('validator');

// Now you can use the functions and properties provided by the 'validator' module in your code.
// For example, to validate an email address:
    // const email = 'example@example.com';
    // if (validator.isEmail(email)) 
    //   {
    //      console.log('Valid email address');
    //   } 
    // else 
    //   {
    //      console.log('Invalid email address');
    //   }
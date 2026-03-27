// 03_Import01.js

// Moudle :

// 1. Importing an object
    const import_File = require('./03_Import02.js')         // import_File is an object / Variable
    console.log(import_File);               // { x: 10, y: 20, z: [Function: z] }
    console.log(import_File.x);             // 10
    console.log(import_File.y);             // 20
    console.log(import_File.z);             // [Function: z]
    console.log(import_File.z());           // 30



// 2. Import variables and functions
    const { greeting, add } = require('./03_Import03.js');
    // Use them
    console.log(greeting);           // Output: Hello, World!
    console.log(add(5, 3));           // Output: 8


    // console.log(import_File.add(5, 3));     // TypeError: import_File.add is not a function
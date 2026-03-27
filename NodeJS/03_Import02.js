// 03_Import02.js

// 1. Export Object from 03_Import02.js file and use it in 03_Import01.js file
    // To export an object, we can use the following syntax:
        // module.exports = { key1: value1, key2: value2, key3: value3, ... };

 // Importing a module that exports an object
module.exports = { 
    x : 10,
    y : 20,
    z : function() 
                {
                    return 30;
                }
}


// JS IMPORT EXPORT
    // export const x = 10;
    // export const y = 20;

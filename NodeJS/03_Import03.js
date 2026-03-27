
// 2. Export variables and functions
    // Exporting variables and functions is similar to exporting objects.
    // We can export multiple variables and functions by wrapping them in an object.
    // We can also export them individually.
    // To export variables and functions, we can use the following syntax:
        // module.exports = { variable1, variable2, function1, function2, ... };

// Define a variable and a function
    const greeting = "Hello, World!";
    const add = (a, b) => a + b;
 
// Export them
    module.exports = { greeting, add };

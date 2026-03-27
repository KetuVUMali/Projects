// 05_Core_Module.js

// core modules are the built-in modules 
    // 1. Global Core Modules
        //Global core modules can be accessed directly without requiring the require() function. 
        // These modules are available globally in all Node.js applications.
        // Built-in modules provided by Node.js are called core modules.

        // Examples of Global Core Modules:
            // global Object   similar to window in browsers.
                // Provides access to the global scope.
                // Examples: setTimeout, clearTimeout, setInterval, clearInterval.
                global.myGlobalVar = "Hello, Global!";
                console.log(myGlobalVar); // Output: Hello, Global!

            // process
                // Represents the current Node.js process.
                // Examples: process.argv, process.env, process.exit().


            // Directry Name
                console.log(__dirname);         // C:\Desktop Data\Desktop\NodeJS\05_Core_Module

   

            // File Name
                console.log(__filename);        // C:\Desktop Data\Desktop\NodeJS\05_Core_Module\05_Core_Module.js


            // console        
                // Provides debugging and logging tools.
                // Used for debugging and logging messages to the console.
                // Examples: console.log, console.error.
                console.log("This is a log message.");
                console.error("This is an error message.");

            // Timers : 
                // i. setTimeout()	Executes a function after a specified time delay.
                // ii. setInterval()	Repeatedly calls a function with a fixed time interval.
                // iii. clearTimeout()	Cancels a timeout set by setTimeout().
                // iv. clearInterval()	Cancels an interval set by setInterval().
                //
                // Built-in timer functions.
                // Examples: setTimeout, setInterval.
                setTimeout(() => {
                    console.log("This runs after 2 seconds");
                }, 2000);


    // 2. Non-Global Core Modules
        // Non-global core modules must be imported using the require() function before use.

            // Examples of Non-Global Core Modules:
            // fs
                // File system operations.
                // Handles file operations like reading, writing, updating, and deleting files.
                // Example: fs.readFile(), fs.writeFile().
                    //  fs (File System)
                    // The fs module allows you to interact with the file system, like reading, writing, and modifying files.
                        // To use the fs module, import it using the require() function:
                        const file_system = require('fs');
                        // Create File
                        file_system.writeFileSync('file.txt', 'Creating A New File');

                            // ShortCut 
                                // const fs = require('fs').writeFileSync('file.txt', 'Creating A New File');
                        // Create File (file.txt) with content (Creating A New File)

            // http 
                // Create and handle HTTP servers requests & responses..
                // Example: http.createServer().

            // os 
                // Provides OS-related utility methods.
                // Provides information about the operating system.
                // Example: os.platform(), os.freemem().
                    const os_system = require('os');
                    console.log('OS Platform:', os_system.platform());     // OS Platform: win32
                    console.log('Free Memory:', os_system.freemem());      // Free Memory: 1960734720
                

            //** path 
                // Utilities for working with file paths.
                // Example: path.join(), path.resolve().
                    const path = require('path');
                    const filePath = path.join(__dirname, 'example.txt');  // File Path: C:\Desktop Data\Desktop\NodeJS\05_Core_Module\example.txt
                    console.log('File Path:', filePath);    // C:\Desktop Data\Desktop\NodeJS\05_Core_Module\05_Core_Module.js



                // 'path' module is a built-in module used to work with file and directory paths.
                // It allows us to handle different operating system paths without errors.
                // Makes it easy to work with folders and files.

                    // const path = require('path');
                    // console.log("Path : ", path);
                        // require('path') → This imports the path module.
                        // console.log("Path : ", path); → Displays the complete path object, which contains many useful functions.
                             // OP=>
                                    // Path :  {
                                    //     resolve: [Function: resolve],
                                    //     join: [Function: join],
                                    //     dirname: [Function: dirname],
                                    //     basename: [Function: basename],
                                    //     extname: [Function: extname],
                                    //     ...
                                    // }

                    // Commonly Used path Methods
                     // const path = require('path');

                        // 1️⃣ path.join() → Combines multiple path segments.
                            //              Joins different folder and file names into one path.
                          
                                //1. console.log(path.join('/user', 'docs', 'file.txt'));
                                      // Output: '/user/docs/file.txt'

                                //2. const filePath = path.join('folder1', 'folder2', 'file.txt');
                                //   console.log(filePath);
                                      // Output: folder1/folder2/file.txt



                        // 2️⃣ path.resolve() → Resolves an absolute path (Creates an Absolute Path)
                            //                  Gives the full path from the root directory. (It converts a relative path into a full system path.)
                                //1. console.log(path.resolve('file.txt'));
                                      // Output: 'C:/Users/yourname/project/file.txt'  (Absolute Path)

                                //2. const absolutePath = path.resolve('file.txt');
                                //   console.log(absolutePath);
                                      // Output: C:\Users\yourname\project\file.txt 



                        // 3️⃣ path.basename() → Gets the file name from a path ( Extracts only the file name from a full path.)
                                //1. console.log(path.basename('/user/docs/file.txt'));
                                      // Output: 'file.txt'

                                //2. const fileName = path.basename('/user/docs/report.pdf');
                                //   console.log(fileName);
                                    // Output:  report.pdf



                        // 4️⃣ path.extname() → Gets the file extension ( Finds the file type from a filename.)
                            //1. console.log(path.extname('/user/docs/file.txt'));
                                  // Output: '.txt'

                            //2. const fileExtension = path.extname('photo.png');
                            //   console.log(fileExtension);
                                // Output: .png



                        // 5️⃣ path.dirname() → Gets the directory(Folder) name.      (Extracts the folder location of a file.)
                            //1. console.log(path.dirname('/user/docs/file.txt'));
                                  // Output: '/user/docs'

                            //2. const directoryName = path.dirname('/user/docs/report.pdf');
                            //   console.log(directoryName);
                                  // Output:  '/user/docs'




            // events 
                // Provides event-driven programming.
                // Implements the EventEmitter class for handling custom events.
                // Example: EventEmitter.

            // crypto 
                // Cryptographic operations.
                // Handles encryption, decryption, and hashing functions.
                // Example: crypto.createHash().

            // url 
                // URL parsing and formatting.
                // Example: url.parse(), url.format().











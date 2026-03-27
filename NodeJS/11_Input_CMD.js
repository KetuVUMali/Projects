// 11_Input_CMD.js

// 1. set / take Input From CMD
// 2. create file with Input
// 3. delete file with Input


// arguent vector (process.argv)
    //The process.argv array contains command-line arguments passed when executing the Node.js script.


// process (ia a object & contain all things of node)
    // The process object is a global object and can be accessed from anywhere in the code.
    // process object is a global object in Node.js (like console, http, fs, etc.) 
    // that provides information and control over the currently running Node.js process.
    // It provides information such as the command-line arguments, environment variables, current working directory, memory usage, and more.


// Key Properties and Methods of process
    // 1. process.argv
        // argv : Arguments Vector
        // argv is an array that contains the command-line arguments passed when the Node.js process was launched.
        // Contains the command-line arguments passed when the script is executed.
        // EX console.log(process.argv);

    // 2. process.env
        // env : Environment
        // 
        // Contains the environment variables of the process.
        // ex console.log(process.env);
        //    console.log(process.env.USER); // Outputs: ketan

    // 3. process.cwd()
        // cwd : Current Working Directory
        // Returns the current working directory of the Node.js process.
        // ex console.log(process.cwd());

    // 4. process.exit()
        // Exits the current process with an optional exit code.
        // Terminates the Node.js process with an optional exit code.
        // used to terminate a Node.js process
        // ex process.exit(0); // Exit with success code 0

    // 5. process.stdin
        //  stdin : Standard Input
        // Represents the standard input stream of the process.
        // ex process.stdin.on('data', (data) => {
        //     console.log(`Received data: ${data}`);
        //     process.exit();
        // });

    // 6. process.stdout
        // stdout : Standard Output
        // Represents the standard output stream of the process.
        // ex process.stdout.write('Hello, world!\n');

    // 7. process.stderr
        // stderr : Standard Error
        // stderr is a writable stream used to write error messages.
        // Represents the standard error stream of the process.
        // ex process.stderr.write('Error occurred!\n');

    // 8. process.pid
        // pid : Process ID
        // 
        // Returns the process ID of the current Node.js process.
        // ex console.log(`Process ID: ${process.pid}`);

    // 9. process.memoryUsage()
        // Returns information about the memory usage of the process, broken into different sections.
        // console.log(process.memoryUsage());

    // 10. process.uptime()
        // uptime : Process Uptime
        // Returns the number of seconds the Node.js process has been running.
        // console.log(`Process uptime: ${process.uptime()} seconds`);          // Process uptime: 3.456 seconds

    // 11. process.exit([code])
        // code : Exit Code
        // Terminates the process with the given exit code.
        // 0: Indicates success (default).
        // Non-zero: Indicates an error.

        // console.log('Goodbye!');
        // process.exit(0);      // Goodbye!

    // 8. process.pid
        // pid : Process ID
        // Returns the process ID of the current Node.js process.
        // The Process ID of the running Node.js process.
        // console.log(`Process ID: ${process.pid}`);          // Process ID: 12345
 

//  Create file with Input

    // take Input From CMD
    const fileSystem = require('fs');

    const input = process.argv;

    fileSystem.writeFileSync(input[2],input[3])

     // fs.writeFileSync()  file create and write data inside file fun.
    // fs.writeFileSync(file_Name_Extension, File_data, optional_parameter)
   



//Parameter (cmd)           node  11_Input_CMD.js   11_file.txt   'Massage inSide file'
//index No of para           0          1               2                   3 


// op ->   'file.txt' file created a & inside file print 'Massage inSide file'
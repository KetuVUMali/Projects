// 08_package_json.js

// package.json
    // The package.json file is a central configuration file in a Node.js project. 
    // It contains metadata about the project and helps manage the project’s dependencies, scripts, and other settings.

// Why is package.json Important?
    // Defines the project’s metadata (name, version, author, etc.).
    // Lists dependencies required for the project to run.
    // Specifies scripts to automate tasks (e.g., running tests or starting the server).
    // Helps share the project with others and ensures consistency in dependencies.

// Key Fields Explained
    // 1. name
        // The name of your project or package.
        // Must be unique if published to npm.
        // Example: "name": "my-node-app"
    // 2. version
        // Specifies the version of your project.
        // Follows Semantic Versioning (e.g., 1.0.0).
        // Example: "version": "1.0.0"
    // 3. description
        // A short description of your project.
        // Example: "description": "A simple Node.js app"
    // 4. main
        // The entry point of your application.
        // Defaults to index.js if not specified.
        // Example: "main": "app.js"
    // 5. scripts
        // Defines custom commands you can run using npm run.
        // Common scripts include start, test, build, etc.
    // 6. author
        // The author of the project.
        // Example: "author": "John Doe"
    // 7. license
        // Specifies the license for the project.
        // Example: "license": "MIT"
    // 8. dependencies
        // Lists the packages required for the project to run.
    // 9. devDependencies
        // Lists the packages needed only for development.
    // 10. keywords (Optional)
        // An array of keywords related to the project, useful for npm search.


// How to Create a package.json
        // 1. Using npm init 
        //     Run the following command in your terminal:        npm init
        //     It will prompt you to enter the required fields (name, version, description, etc.).
        // 2. Using npm init -y
        //     Automatically creates a package.json file with default values :  npm init -y


// Managing Dependencies
        // Installing Dependencies
           // To install a package and save it to dependencies: npm install express
           // To install a package and save it to devDependencies: npm install nodemon --save-dev
        // Removing Dependencies
            // To uninstall a package:  npm uninstall express


    // Create A Package.JSON File 
            // cmd => npm init
            // package name:
            // version:
            // description:
            // entry point :   ( First file run Name)
            // test command:  (wtite commond or Enter)
            // git repository: (Git Repo Link)
            // keywords: (Demo)
            // author: (Ketan Mali)
            // license: (Enter)
            // Is this OK?  (Enter)



// Note : 
        // package.json file is very important in Node.js Project. It contains all the information about the project and helps manage the project’s dependencies, scripts, and other settings.
        // package.json file is a central configuration file in a Node.js project. It contains metadata about the project and helps manage the project’s dependencies, scripts, and other settings.
        // If package.json file is not present in the project, then we can create it by using npm init command.
                //1. if package.json file is deleted, then we can create it by using npm init command.
                //2. if package.json file is deleted then all the dependencies will be deleted from the project.
                //3. if package.json file is deleted then project will not run.



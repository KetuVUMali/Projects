// index.js

//  ...................\NodeJS\06_External_Module> node .\index.js

// get color and style in your node.js console
    // install npm i colors 
    // C:\Desktop Data\Desktop\NodeJS\06_External_Module> npm i colors
    // node_modules         Floder Created automatic
        // package-lock.json    File Created automatic
        // package.json         File Created automatic
    // node_modules  -> color  (It is color Module)
    // node_modules  /  colors  (It is colors Module)
    // package-lock.json    Contains package metadata.(pakage Details)
            // "dependencies": {"colors": {"version":, "resloved":, "intrgrity":}  }  add in package-lock.json file.
    // package.json         Contain project metadata.
            // "dependencies": { "colors": "^1.4.0" }  add in package.json file

const colors = require('colors');

console.log("Hello".green);
console.log("I like cake".bgRed);
//console.log("I like cake and pies".underline.red);    // Give load CLI
console.log("Inverse the color".inverse);
console.log("OMG Rainbows!".rainbow);
console.log("Run the trap".trap);
console.log("Drop the bass".drop);          // undefined
console.log("Make them bold".bold);
console.log("Double Underline".doubleUnderline);    // undefined
//console.log("Chains are fun!".yellow.bgRed);          // Give load CLI
console.log("So ".green + "are".underline + " ".green + "inverse".inverse + " styles! ".yellow.bold);
console.log("Esperanto".zebra);
console.log("Forest".rainbow);
console.log("This is not fun.".random);
console.log("Underline morse code".morse);      // undefined
console.log("There is no catch, just fun!".zalgo);
    

console.log('Background color attack!'.black.bgWhite);
console.log('Use random styles on everything!'.random);
console.log('America, Heck Yeah!'.america);



  


// Color Module Files
            // import module first
    // node_modules
    // package-lock.json
    // package.json

// Color Module use in index.js
    // index.js

// node_modules
    // if node_modules folder delete then run --> npm install
    // all packages automatic install.

// Node.js is single-threaded 
    // one time run one commond.
    // A thread is the smallest unit of a CPU's execution, where code is run sequentially.
    // In a single-threaded program, tasks are executed one at a time on a single thread, in the order they are scheduled.


// Note : We cant push node_modules on git because their size problem.


// .gitignore 
            // node_modules we cant push on git becase their size problem .
    // .gitignore file use for this file we cant push on git
    // in this file inside which file name present that file cant push on git.
    // .gitignore  ->  /node_modules  

// .gitignore file How to create
    // create file .gitignore (root folder of project )
    // write in file  /node_modules
    // save file
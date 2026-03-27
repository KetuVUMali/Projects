// 14_Asynchronous.js

// Node.js is async lang (All Program)                  // JS Is Async Lang



    // Asynchronous (Async)
        // Execution Moves to next task without waiting.(Multiple task at a time).
        // Performance	Faster (Handles multiple tasks).
        // Does not block execution.
        // Executes code in parallel, non-blocking.
        // Moves on to the next task without waiting.
        // Uses callbacks, promises, or async/await to handle results. 
        // Faster because it doesn't wait for tasks to finish before moving on.


    // Synchronous (Sync)
        // Execution  Line by line (Waits for each task)(one by one task)
        // Performance	Slower (Waits for each task)
        // Executes code line by line, in order.
        // Slower because it waits for each task to finish before moving on.




// How Node.js Handles Asynchronous Code?
    // Node.js uses an event loop and callbacks to handle async operations efficiently:
        // A task (e.g., reading a file, fetching data from an API) is sent to the background.
        // Node.js does not wait and moves on to the next task.
        // When the task is done, it calls back a function with the result.
        // This is known as a callback function.
    // Node.js is asynchronous because it does not block execution and uses the event loop to handle multiple tasks efficiently.
    // Asynchronous programming makes APIs, databases, and file operations faster in Node.js.
    // Node.js uses callbacks, promises, and async/await to handle async operations.



// Node JS is Single Threaded & Asynchronous 
    // it is based on catergorized in 2 parts
        // Single Threaded  (Single-thread & multi-thread)
        // Asynchronous     (Synchronous & Asynchronous)
         
        // single-threaded means that it uses a single thread to execute JavaScript code.
        // Asynchronous means that it can handle multiple requests at the same time.



// Node.js is Single-threaded 
    // A thread is the smallest unit of execution within a process.


    // Single-Threaded : 
                        // One main execution thread.
                        // one task at a time. ( one time run one commond)
                        // Executes tasks one by one (synchronous execution)
                        // Only one worker doing tasks one by one.
                        // Executes one task at a time.
                        // The next task starts only after the previous one finishes.
                    // Node.js is single-threaded and uses non-blocking I/O operations, allowing it to handle tens of thousands of concurrent connections.
                    // Node.js is single-threaded, meaning it runs on a single thread using non-blocking I/O calls, allowing it to handle tens of thousands of concurrent connections.
                    // Node.js is single-threaded by design but can handle asynchronous operations.
                        // Advantages
                            //  ✅ Easy to write and debug.
                            //  ✅ No complex issues like thread conflicts.

                        // Disadvantages
                            //  ❌ Slow if a task takes too long.
                            //  ❌ Cannot handle multiple tasks at the same time.
            
            

    // multi-threaded
                    // Multiple workers doing tasks at the same time.
                    // Executes multiple tasks at the same time.
                    // Uses multiple workers (threads) to perform tasks faster.
                    // Advantages
                        //  ✅ Faster execution (tasks run at the same time).
                        //  ✅ Utilizes CPU power efficiently.
                    
                    // Disadvantages
                        //  ❌ Harder to manage (threads can interfere with each other).
                        //  ❌ Bugs like race conditions (two threads modifying the same data).



    // Example of Single Threaded (Synchronous Programming)
                // console.log("Start");
                // for (let i = 0; i < 3; i++) 
                //     {
                //         console.log("Processing " + i);
                //     }
                // console.log("End");

            // op ->
                    // Start
                    // Processing 0
                    // Processing 1
                    // Processing 2
                    // End

    // Example of Multi-Threaded (Asynchronous Programming)
                // console.log("Start");
                // for (let i = 0; i < 3; i++) 
                //     {
                //         setTimeout(() => {
                //             console.log("Processing " + i);
                //         }, 2000);
                //     }
                // console.log("End");

            // op ->
                    // Start
                    // End
                    // Processing 0
                    // Processing 1
                    // Processing 3


                    
                // console.log("Start")
                // setTimeout(() => {
                //     console.log("Task Completed");
                // }, 2000);
                
                // console.log("End");

            // op ->
                    // Start
                    // End
                    // Task Completed






    // 1. Synchronous Programming (line by line)
        // In synchronous programming, tasks are executed one after another, in sequence.
        // Each task must complete after the next one starts.

           console.log("Step 1");
           console.log("Step 2");
           console.log("Step 3");
           // op
                // Step 1
                // Step 2
                // Step 3
        
        
            // const fs = require('fs');
            // console.log('Start reading file');
            // const data = fs.readFileSync('example.txt', 'utf8'); // Blocks here until the file is read
            // console.log('File content:', data);
            // console.log('Finished reading file');

            // op
                // Start reading file
                // File content: <content of example.txt>
                // Finished reading file

        // Drawback:
            // If a task takes too long (e.g., reading a large file), it blocks the entire program, making it unresponsive.


    // 2. Asynchronous Programming (All Program)
        // he excute program but which block take more time that block send to quae 
        // In asynchronous programming, tasks can start and run in the background without blocking the execution of other tasks.
        // It relies on callbacks, Promises, or async/await.

            console.log("Step 1");
            setTimeout(()=>{   console.log("Step 2");   },20000)                        // 2 second
            console.log("Step 3");

            //op
                // Step 1
                // Step 3
                // Step 2
        
        
            // const fs = require('fs');
            // console.log('Start reading file');
            // fs.readFile('example.txt', 'utf8', (err, data) => {
            //     if (err) {
            //         console.error('Error reading file:', err);
            //         return;
            //     }
            //     console.log('File content:', data);
            // });
            // console.log('Finished reading file');

            // op 
            // Start reading file
            // Finished reading file
            // File content: <content of example.txt></content>





            // let a=10;
            // let b=0;
            // setTimeout(()=>{
            //     b=20;
            // },20000)                        // 2 second
            // console.log(a+b);

            // op
                // 10

            // This type switchwatich handle by callback or promises through.


// Handle Asynchronous data in Node.Js
    // Promis is waitng process for data
            let a=10;
            let b=0;
            // create promise for set b value
            let waitingData = new Promise((resolve,rejects)=>{          // resolve,rejects are two para to solve problem
                setTimeout(()=>{
                        resolve(30);                                    // set to we wont assiegn value or change data
                    },20000)
            })
            // perform opration  or to get data
            waitingData.then((b)=>{                                 // set b value 30 from promise resolve
                console.log(a+b);
            })

            // op
                // 40





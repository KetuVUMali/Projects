// 02_Console.js

// To Run FIle :  node .\02_Console.js

// Console
   //  used to output messages

   // In Node.js   console is a module  (object is a global object ).
   // In JS    console  is a meansium provide by web browesr.

// but Node.js  same as it is JS expectect some small cheanges.

    
    // 1   console.log()
        //Prints general information or messages to the console (stdout).
        console.log('Hello, World!');
        console.log('Sum of 2 + 3 =', 2 + 3);

    // 2   console.error()
        //Prints error messages to the console (stderr).
        console.error('An error occurred.');
        console.error('This is an error message!');


        const user = { name: 'Alice', age: 25 };
        console.log('User Data:', user);
        if (user.age < 18) 
            {  console.error('User is underage!');  } 
        else 
            {  console.log('User is an adult.');  }


    // 3   console.warn()
        //Prints warning messages to the console.
        console.warn('This is a warning message.');


    // 4   console.info()
        //Prints informational messages to the console.
        //Similar to console.log(), used for informational messages.
        console.info('This is an informational message.');


    // 5   console.debug()
        //Prints debug messages to the console.
        //Similar to console.log(), used for debugging purposes.
        console.debug('This is a debug message.');


    // 6   console.table()
        //Prints a table representation of an object to the console.
        // Prints tabular data in a table format.
        const fruits = [
                            { name: 'Apple', color: 'Red' },
                            { name: 'Banana', color: 'Yellow' },
                            { name: 'Grapes', color: 'Green' }
                        ];
          console.table(fruits);

          const scores = [
                            { name: 'Alice', math: 95, science: 90 },
                            { name: 'Bob', math: 85, science: 88 },
                            { name: 'Charlie', math: 78, science: 80 }
                        ];
          console.table(scores);


    // 7   console.count()
        //Logs the number of times console.count() has been called with the same label.
        console.count('Count');

    // 8    console.time()
        //Starts a timer with the specified label.
        console.time('Timer');

    // 9    console.timeEnd()
        //Stops the timer with the specified label and prints the elapsed time.
        console.timeEnd('Timer');

        // Measures how long a block of code takes to execute.
        console.time('LoopTime');
        for (let i = 0; i < 100; i++) 
            { 
                // console.log(i);  
            } 
        console.timeEnd('LoopTime');  

        console.time('Factorial');
            function factorial(n) 
                {
                    return n === 0 ? 1 : n * factorial(n - 1);
                }
            console.log('Factorial of 5 is', factorial(5));
        console.timeEnd('Factorial');


    // 10   console.trace()
        //Prints a stack trace to the console.
        function foo() {
            console.trace('Trace');
        }


    // 11   console.clear()
        //Clears the console.
        console.clear();


    // 12   console.group()
        //Creates a new inline group in the console.
        console.group('Group');


    // 13   console.groupEnd()
        //Closes the most recently opened group in the console.
        console.groupEnd();


    // 14   console.assert()
        //Writes an assertion message to the console if the assertion is false.
        // Logs a message only if an assertion is false.
        console.assert(2 + 2 === 5, 'Assertion failed: 2 + 2 is not equal to 5');
        const age = 18;
        console.assert(age >= 21, 'Age is less than 21!'); 


    // 15   console.dir()
        //Prints an interactive listing of the properties of an object.
        console.dir({ name: 'John', age: 30 });


    // 16   console.dirxml()
        //Prints an XML representation of an HTML element.
        // console.dirxml(document.body);               // ReferenceError: document is not defined


    // 17   console.profile()
        //Starts a CPU profile.
        console.profile('Profile');


    // 18   console.profileEnd()
        //Stops the current CPU profile.
        console.profileEnd();


    // 19   console.countReset()
        //Resets the count for a specific label.
        console.countReset('Count');

        
    // 20   console.groupCollapsed()
        //Creates a new inline group in the console, but the group is initially collapsed.
        console.groupCollapsed('Collapsed Group');

    // 21   


// var, loop, coditional statements, functions, objects, arrays, etc are same as JS.
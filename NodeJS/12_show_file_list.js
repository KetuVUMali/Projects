// 12_show_file_list.js
// Show File List on Console


// fs Module
    // fs (File System) module in Node.js allows you to interact with the file system on your computer.
    // It provides a lot of very useful functionality to access and interact with the file system.
    // With the fs module, you can create, read, update, delete, and rename files.
    //We can: 
        // ✅ Create files
        // ✅ Read files
        // ✅ Write files
        // ✅ Update files
        // ✅ Delete files
        // ✅ Rename files
    // It supports both synchronous and asynchronous methods.


// const dirPath2 = path.join(__dirname, '12_Files');
// we can access current directry file and inside file & Folder also
// but outside file and folder we can't access


// Import File System module
    const fs = require('fs');

// 1. File Create 
    // fs.writeFileSync('12-file.txt', 'This is a new file created by XXXX.js');

        // cmd : node .\12_show_file_list.js
        //     'file.txt' created




    //  Creaate Multiple Files
        // const fs = require('fs');            // already  declared
        const path = require('path');
        //console.log("Path : ",path);
        const dirPath1 = path.join(__dirname);                  // Create a directory path ( Main Directory )
        //console.log('dirPath : ', dirPath1);                   // C:\Desktop Data\Desktop\Programming Practices\NodeJS
        const dirPath2 = path.join(__dirname, '12_Files');        // Create a directory path + 12 Files folder ( Attach Directory Inside Folder )
        //console.log('dirPath : ', dirPath2);                     // C:\Desktop Data\Desktop\Programming Practices\NodeJS\12_Files

        // Create files in a 12_Files folder
            // for (let i = 1; i <= 3; i++) {
            //     fs.writeFileSync(`${dirPath2}/12_file_${i}.txt`, `This is a new file created by XXXX.js ${i}`);
            // }

        // Create files in current folder
            // for(let i=1; i<=3; i++){
            //     fs.writeFileSync(dirPath1+`hello${i}.txt`, `This is file ${i}`);
            //     console.log(`File hello${i}.txt created`);
            // }







// 2. File Remove (delete)
    // const fs = require('fs');     // already  declared
    // fs.unlinkSync('12-file.txt');
        // cmd : node .\12_show_file_list.js
        //     'file.txt' remove

        // If '12-file.txt' file not present then it will give error : Error: ENOENT: no such file or directory, unlink '12-file.txt'



// 3. Show File List on Console
    // const fs = require('fs');        // already  declared
    const files = fs.readdirSync('.');
    // console.log('files : ',files);      // op->  List of all Files in the Directory
        // cmd : node .\12_show_file_list.js


    //  Show File List on Console with ForEach
        // const fs = require('fs');        // already  declared
          const files2 = fs.readdirSync('.');
            // files2.forEach( (file) => {
            //     console.log('files:' ,file);    // op->  List of all Files in the Directory
            // });




// 4. Check File Exist
    // const fs = require('fs');        // already  declared
        // const exists = fs.existsSync('12-file.txt');    
        // console.log('exists : ', exists);        // op->  true  if not exit then false
            // cmd : node .\12_show_file_list.js

    // Check File Exist with if-else
        // const fs = require('fs');        // already  declared
            // if (fs.existsSync('12-file.txt')) 
            //     {
            //         console.log('File exists : 12-file.txt');
            //     } 
            // else 
            //     {
            //         console.log('File does not exist : 12-file.txt');
            //     }




//5. Rename File
    // const fs = require('fs');        // already  declared    
    // fs.renameSync('12-file.txt', 'new-12-file.txt');        //  12-file.txt  => new-12-file.txt
    // console.log('File renamed successfully!');
        // cmd : node .\12_show_file_list.js    
        // op->    File renamed successfully!

    // again Rename 
        // fs.renameSync('new-12-file.txt','12-file.txt');      // new-12-file.txt  => 12-file.txt
        // console.log('File renamed successfully!');





// 6. Read File Inside Data
    // const fs = require('fs');        // already  declared
    //const data = fs.readFileSync('12-file.txt', 'utf8');
    // console.log('Data:', data);
            // cmd : node .\12_show_file_list.js
            // op->    Data: This is a new file created by XXXX.js




// 7. Add File Inside New More Data
        // const fs = require('fs');        // already  declared
        // fs.writeFileSync('12-file.txt', 'This is a new file created by XXXX.js');
        // fs.appendFileSync('12-file.txt', '\nNew content added!');
        // console.log('Data appended successfully!');




// 8. Update (Replace) File Inside Data
    // const fs = require('fs');        // already  declared
    // fs.writeFileSync('12-file.txt', 'This is a new file created by XXXX.js');
    // console.log('Data updated successfully!');




// 9. Get File Information
    // const fs = require('fs');        // already  declared
    // const stats = fs.statSync('12-file.txt');
    // console.log('Stats:', stats);    
        // cmd : node .\12_show_file_list.js
        // op->    Stats: Stats { .......... }  // 12-file.txt file information




// Buffer : 
    // Buffer is a temporary storage location in memory used to store data while it is being transferred from one place to another.
    // It is Temporary memory location.



// 10. Read File Inside Data with Buffer
    // const fs = require('fs');        // already  declared
    // const data = fs.readFileSync('12-file.txt');
    // console.log('Data:', data);
        // cmd : node .\12_show_file_list.js
        // op->    Data: <Buffer 54 68 69 73 20 69 73 20 61 20 6e 65 77 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 62 79 20 58 58 58 58 2e 6a 73>
        








    //      Operation	    Synchronous (Sync)	     Asynchronous

    //      Create	        fs.writeFileSync()	    fs.writeFile()
    //      Read	        fs.readFileSync()	    fs.readFile()
    //      Append	        fs.appendFileSync()	    fs.appendFile()
    //      Rename	        fs.renameSync()	        fs.rename()
    //      Delete	        fs.unlinkSync()	        fs.unlink()

    // 📌 
        //      ✅ Use Synchronous (Sync) methods when dealing with small files or scripts.
        //      ✅ Use Asynchronous methods for better performance in large applications.



// The fs module helps manage files in Node.js.
    // ✔ Use synchronous methods (Sync) for small scripts.
    // ✔ Use asynchronous methods for better performance in large applications

        // 'path' handle file or directory path without affecting error.


// File System (fs) Module Methods


// 0. Import File System module
    //  const fs = require('fs');

// 1️⃣. Creates a new file or overwrites an existing file.
    // i. fs.writeFileSync() (Synchronous)
        // fs.writeFileSync('test.txt', 'Hello, this is a new file!');
        // console.log('File created successfully!');

            // Output: File created successfully!
            // Explanation:
                            // "test.txt" → The file name.
                            // 'Hello, this is a new file!' → Content to write in the file.


    // ii. fs.writeFile() (Asynchronous)
        //fs.writeFile('test.txt', 'Hello, this is a new file!', (err) => {
        //              if (err) {
        //                      console.error('Error:', err);
        //               } else {
        //                      console.log('File created successfully!');
        //               }
        //          });  

                // Output: File created successfully!
                // Explanation:
                                // "test.txt" → The file name.
                                // 'Hello, this is a new file!' → Content to write in the file.
                                // (err) → Callback function to handle errors.

// 2️⃣ Read a File
    // i. fs.readFileSync() (Synchronous)
        //  const data = fs.readFileSync('test.txt', 'utf8'); // Read file content
        //  console.log(data);

            // Output: Hello, this is a new file!
            // Explanation:
                            // "test.txt" → The file name.
                            // 'utf8' → Encoding type.
    
    // ii. fs.readFile() (Asynchronous)
        // fs.readFile('test.txt', 'utf8', (err, data) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log(data);
        //          }
        //     });

                // Output: Hello, this is a new file!
                // Explanation:
                // "test.txt" → The file name.
                // 'utf8' → Encoding type.
                // (err, data) → Callback function to handle errors and read file content.

// 3️⃣ Append Data (Content) to a File
    // i. fs.appendFileSync() (Synchronous)
        // fs.appendFileSync('test.txt', '\nNew content added!');
        // console.log('Data appended successfully!');

            // Output: Data appended successfully!
            // Explanation:
                            // "test.txt" → The file name.
                            // '\nNew content added!' → Content to append in the file.

    // ii. fs.appendFile() (Asynchronous)
        // fs.appendFile('test.txt', '\nNew content added!', (err) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log('Data appended successfully!');
        //          }
        //     });

                // Output: Data appended successfully!
                // Explanation:
                                // "test.txt" → The file name.
                                // '\nNew content added!' → Content to append in the file.
                                // (err) → Callback function to handle errors.

                
// 4️⃣ Rename a File
    // i. fs.renameSync() (Synchronous)
        // fs.renameSync('test.txt', 'new-test.txt');
        // console.log('File renamed successfully!');

            // Output: File renamed successfully!
            // Explanation:
                            // "test.txt" → The old file name.
                            // 'new-test.txt' → The new file name.

    // ii. fs.rename() (Asynchronous)
        // fs.rename('test.txt', 'new-test.txt', (err) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log('File renamed successfully!');
        //          }
        //     });

                // Output: File renamed successfully!
                // Explanation:
                                // "test.txt" → The old file name.
                                // 'new-test.txt' → The new file name.
                                // (err) → Callback function to handle errors.


// 5️⃣ Delete a File
    // i. fs.unlinkSync() (Synchronous)
        // fs.unlinkSync('new-test.txt');
        // console.log('File deleted successfully!');

            // Output: File deleted successfully!
            // Explanation:
                            // "new-test.txt" → The file name to delete.

    // ii. fs.unlink() (Asynchronous)
        // fs.unlink('new-test.txt', (err) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log('File deleted successfully!');
        //          }
        //     });

                // Output: File deleted successfully!
                // Explanation:
                                // "new-test.txt" → The file name to delete.
                                // (err) → Callback function to handle errors.





// 6️⃣ Read Directory
    // i. fs.readdirSync() (Synchronous)
        // const files = fs.readdirSync('.');
        // console.log(files);

            // Output: [ 'new-test.txt' ]
            // Explanation:
                            // '.' → The current directory.
                            // files → An array of files in the current directory.

    // ii. fs.readdir() (Asynchronous)
        // fs.readdir('.', (err, files) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log(files);
        //          }
        //     });

                // Output: [ 'new-test.txt' ]
                // Explanation:
                                // '.' → The current directory.
                                // files → An array of files in the current directory.
                                // (err, files) → Callback function to handle errors and read files.


// 7️⃣ Check if a File Exists
    // i. fs.existsSync() (Synchronous)
        // const exists = fs.existsSync('new-test.txt');
        // console.log(exists);

            // Output: true
            // Explanation:
                            // "new-test.txt" → The file name.
                            // exists → true if the file exists; otherwise, false.

    // ii. fs.access() (Asynchronous)
        // fs.access('new-test.txt', fs.constants.F_OK, (err) => {
        //          if (err) {
        //               console.error('File does not exist!');
        //          } else {
        //               console.log('File exists!');
        //          }
        //     });

                // Output: File exists!
                // Explanation:
                                // "new-test.txt" → The file name.
                                // fs.constants.F_OK → Check if the file exists.
                                // (err) → Callback function to handle errors.


// 8️⃣ Get File Information
    // i. fs.statSync() (Synchronous)
        // const stats = fs.statSync('new-test.txt');
        // console.log(stats);

            // Output: Stats {
            //              dev: 16777220,
            //              mode: 33188,
            //              nlink: 1,
            //              uid: 501,
            //              gid: 20,
            //              rdev: 0,
            //              blksize: 4096,
            //              ino: 1407374883553280,
            //              size: 0,
            //              blocks: 0,
            //              atimeMs: 1631495095000,
            //              mtimeMs: 1631495095000,
            //              ctimeMs: 1631495095000,
            //              birthtimeMs: 1631495095000,
            //              atime: 2021-09-13T06:24:55.000Z,
            //              mtime: 2021-09-13T06:24:55.000Z,
            //              ctime: 2021-09-13T06:24:55.000Z,
            //              birthtime: 2021-09-13T06:24:55.000Z
            //          }
            // Explanation:
                            // "new-test.txt" → The file name.
                            // stats → File information.

    // ii. fs.stat() (Asynchronous)
        // fs.stat('new-test.txt', (err, stats) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log(stats);
        //          }
        //     });

                // Output: Stats {
                //              dev: 16777220,
                //              mode: 33188,
                //              nlink: 1,
                //              uid: 501,
                //              gid: 20,
                //              rdev: 0,
                //              blksize: 4096,
                //              ino: 1407374883553280,
                //              size: 0,
                //              blocks: 0,
                //              atimeMs: 1631495095000,
                //              mtimeMs: 1631495095000,
                //              ctimeMs: 1631495095000,
                //              birthtimeMs: 1631495095000,
                //              atime: 2021-09-13T06:24:55.000Z,
                //              mtime: 2021-09-13T06:24:55.000Z,
                //              ctime: 2021-09-13T06:24:55.000Z,
                //              birthtime: 2021-09-13T06:24:55.000Z
                //          }
                // Explanation:
                                // "new-test.txt" → The file name.
                                // stats → File information.
                                // (err) → Callback function to handle errors.


// 9️⃣ Show File List (same to same 6️⃣ No.)
    // i. fs.readdirSync() (Synchronous)
        // const files = fs.readdirSync('.');
        // console.log(files);

            // Output: [ 'new-test.txt' ]
            // Explanation:
                            // '.' → The current directory.
                            // files → An array of files in the current directory.


    // ii. fs.readdir() (Asynchronous)
        // fs.readdir('.', (err, files) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               console.log(files);
        //          }
        //     });

                // Output: [ 'new-test.txt' ]
                // Explanation:
                                // '.' → The current directory.
                                // files → An array of files in the current directory.
                                // (err, files) → Callback function to handle errors and read files.


// 1️⃣0️⃣ Read File Inside a Directory
    // i. fs.readdirSync() (Synchronous)
        // const files = fs.readdirSync('.');
        // files.forEach(file => {
        //          console.log(fs.readFileSync(file, 'utf8'));
        //     });

            // Output: Error: ENOENT: no such file or directory, open 'new-test.txt'
            // Explanation:
                            // '.' → The current directory.
                            // fs.readFileSync() → Read file content.
                            // 'utf8' → Encoding type.

    // ii. fs.readdir() (Asynchronous)
        // fs.readdir('.', (err, files) => {
        //          if (err) {
        //               console.error('Error:', err);
        //          } else {
        //               files.forEach(file => {
        //                    fs.readFile(file, 'utf8', (err, data) => {
        //                         if (err) {
        //                              console.error('Error:', err);
        //                         } else {
        //                              console.log(data);
        //                         }
        //                    });
        //               });
        //          }
        //     });

                // Output: Error: ENOENT: no such file or directory, open 'new-test.txt'
                // Explanation:
                                // '.' → The current directory.
                                // fs.readFile() → Read file content.
                                // 'utf8' → Encoding type.
                                // (err, data) → Callback function to handle errors and read file content. 






// Synchronous & Asynchronous fs Methods
//      Feature	                                  Synchronous (Sync)	             Asynchronous
//      Execution	                        Blocks the main thread	            Does not block the main thread
//      Performance	S                       lower (Good for small tasks)	    Faster (Better for large apps)
//      Callback Function	                ❌ Not Required	                   ✅ Required
//      Try-Catch for Error Handling	    ✅ Yes	                           ❌ No (Error is handled in callback)




// 📌 Conclusion
//      ✅ Use Synchronous (Sync) methods when dealing with small files or scripts.
//      ✅ Use Asynchronous methods for better performance in large applications.
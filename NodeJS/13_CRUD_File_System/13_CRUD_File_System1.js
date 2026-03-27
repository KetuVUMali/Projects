// 13_CRUD_File_System1.js


// Create File 
// Read File
// Update File
// Rename File
// Delete File

const fs = require('fs');                                       // fs module
const path = require('path');                                   // path module
const dirPath = path.join(__dirname, '13_CRUD_File_System');    // folder path

// at a time one operation will run.
//1. Create File
    // fs.writeFileSync('apple.txt', 'This is a new file created by 13_CRUD_File_System1');
        
        // same but error ocuure
            // fs.writeFileSync(`${dirPath}/apple.txt`, 'This is a simple text file');  // folder path/ apple.txt file create 
            // OR
            // const filePath = `${dirPath}/apple.txt`;                    // file path / newfile create
            // fs.writeFileSync(filePath, 'This is a simple text file');   // create file with message.
        
   
    

//2. Read File
        // const fileName = 'apple.txt';
        // fs.readFile(fileName, 'utf8', (err, item) => {
        //     console.log(item);
        // });


//3.  Update File
    // const fileName = 'apple.txt';
    // fs.appendFile(fileName, ' and file name is apple.txt', (err) => {
    //     if (err) {
    //         console.log("File is Not updated");
    //     }
    //     else {
    //         console.log("File is updated");
    //     }

    //                         //OR  same 
    //                         // if (!err) {
    //                         //     console.log("File is updated");
    //                         // }
    // });


//4. Rename File
    // Not Working
        // const fileName = 'apple.txt';
        // fs.rename(fileName, `${dirPath}/fruit.txt`, (err) => {
        //     if (!err) {
        //         console.log("File name is updated");
        //     }
        // });

// 5.   Delete File
        // const fileName = 'apple.txt';
        // fs.unlinkSync(fileName, (err) => {
        //     if (err) {
        //         console.error('Error deleting the file:', err);
        //     } else {
        //         console.log(`File '${fileName}' deleted successfully.`);
        //     }
        // });
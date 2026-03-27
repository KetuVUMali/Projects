// 11_Input_CMD1.js


// 1. set Input From CMD
const fs = require('fs');
const input = process.argv;

//Parameter (cmd)           node   11_Input_CMD1.js    add/remove     11-file.txt    'File Message'
//index No of para           0           1                 2               3              4 


if(input[2] == 'add')           // in CMD 'add' index 2nd present then this excute
    {
        fs.writeFileSync(input[3], input[4]);       // add file and message    // fs.writeFileSync();  file create and write data inside file fun.
        console.log('File created successfully');
    }
else if(input[2] == 'remove')           // in CMD 'remove' index 2nd present then this excute
    {
        fs.unlinkSync(input[3]);    // remove file          // fs.unlinkSync() file delete file fun
        console.log('File deleted successfully');
    }
else                                   // in CMD 'add' or 'remove' index 2nd not present then this excute
    {
        console.log("Invalid Input");
    }


// fs.writeFileSync(file_Name_Extension, File_data, optional_parameter)
// fs.unlinkSync(path) file delete file fun
    // fs.unlinkSync(file_Name_Extension, optional_parameter)
    // It does not return anything. If the file is deleted successfully, execution continues; otherwise, an error is thrown.


//Parameter (cmd)           node 11_Input_CMD1.js  add/remove   11-file.txt  'File Message'
//index No of para           0          1              2             3           4 


// op
    // 1. add file
    // PS C:\Desktop Data\Desktop\NodeJS\11_Input_CMD> node 11_Input_CMD1.js add file.txt 'File Message'
        // 'file.txt'  fole created and inside file 'File Message' print.

    // 2. Remove File
    // PS C:\Desktop Data\Desktop\NodeJS\11_Input_CMD> node 11_Input_CMD1.js remove file.txt
        // Remove 'file.txt' 






// create file with Input
// node 11_Input_CMD.js add file.txt "This is a new file created by XXXX.js"
// node 11_Input_CMD.js remove file.txt


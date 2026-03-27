// 13_CRUD_File_System.js

const fs = require('fs');           // file module
const path = require('path');       // File Path
const dirPath = path.join(__dirname, '13_CRUD_File_System');    // Folde path
const filePath = `${dirPath}/apple.txt`;
// at a time one run

    // 1. Create File 
        //fs.writeFileSync(filePath,'This Is File Created by 13_CRUD_File_System.js');
    
    // 2. Read File
        // fs.readFile(filePath,'utf8', (err,item)=>{
        //     console.log(item);
        // })

    // 3. Update File
        // fs.appendFile(filePath,'and file name is appendFile.txt',(err)=>{
        //     if(!err) console.log("File Is Update...")
        // })

    // 4. Rename File
        // fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
        //     if(!err) console.log("File Name Is Update...");
        // })
    // 5. Delete File
        //fs.unlinkSync(`${dirPath}/fruit.txt`);


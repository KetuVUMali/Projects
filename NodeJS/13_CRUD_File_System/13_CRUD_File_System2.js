// 13_CRUD_File_System2.js
// node .\13_CRUD_File_System2.js
// nodemon .\13_CRUD_File_System2.js

const path = require('path')

const dir = path.join(__dirname)

//console.error(dir);

const fs = require('fs')

// console.log(fs)

const dir2 = path.join(__dirname,"13_File")         // current dirctory + Folder  == inside operation perform.

    // File Create  Directory inside Specific folder.
        // fs.writeFileSync(`${dir2}/00_File.txt`,"Data 1") 
            // op=> File Ctrated at 13_File Folde 

    // Replace File Inside All Data 
        // fs.writeFileSync(`${dir2}/00_File.txt`,"Data 222222222222222222") 
          //  op=> File Inside Data Replaces Successfully

//////////////////////////////////////////////////////////////////
// file create

// console.warn(dir2)

// fs.writeFileSync('01_data.txt','I am Ketan');

    // fs.writeFile('01_A.txt',"Demon King", (err)=>
    //     {
    //         if(err)
    //         {
    //             console.log(error)
    //         }
    //         else
    //         {
    //             console.log("File Ready")
    //         }
    //     }    
    // )



//////////////////////////////////////////////////////////////////////////////////
// File Inside data read

// const read = fs.readFileSync('01_data.txt','utf-8')
// console.log(read)

    // const read2 = fs.readFile('01_A.txt','utf-8',(error,data)=>{
    //     if(error)
    //     {
    //         console.log(error)
    //     }
    //     else{
    //         console.log(data)
    //     }
    // })

////////////////////////////////////////////////////////////////////////////////////
// File Inside Data add


// fs.appendFileSync('01_data.txt', '\n Surname Is mali')

    // fs.appendFile("01_A.txt","\n Name is Syther ... !", (error)=>{
    //     if(error)
    //     {
    //         console.log(error)
    //     }
    //     else
    //     {
    //         console.log("Data Update ");
    //     }
    // })

///////////////////////////////////////////////////////////////////////////
// File Rename

// fs.renameSync('01_data.txt','01_s.txt')
// console.log("File Update name")

    // fs.rename('01_A.txt',"01_Asyn.txt",(error)=>{
    //     if(error)
    //     {
    //         console.log(error)
    //     }
    //     else
    //     {
    //         console.log("File Name Change..!")
    //     }
    // })


////////////////////////////////////////////////////////////////////////
// File Delete

// fs.unlinkSync('01_s.txt')
// console.log("File Delete")


// fs.unlink("01_Asyn.txt",(error)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     else
//     {
//         console.log("File Delete...!");
//     }
// })

///////////////////////////////////////////////////////////////////////

// const { log, warn, error } = require('console');        // console module

// log("This is a normal log message");
// warn("This is a warning message.");
// error("This is an error message.");
// server.js


const expressJS = require('express')
const app = expressJS()

app.use(expressJS.static('public'))


const path = require('path')

const dir = path.join(__dirname,'public')

app.get('/',(req,res)=>{
    res.sendFile(`${dir}/home.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${dir}/about.html`)
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${dir}/contact.html`)
})

app.get('*',(req,res)=>{
    res.sendFile(`${dir}/pageNF.html`)
})


app.listen(5000,()=>{console.log("Server Runs On : http://localhost:5000")})
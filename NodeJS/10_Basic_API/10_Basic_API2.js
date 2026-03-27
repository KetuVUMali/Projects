//10_Basic_API2.js




const http = require('http')

http.createServer((req,resp)=>{

    const user =[{name:'ketan',age:20},
        {name:'Demon',age:200}
    ]

    resp.writeHead(200,({'connection-type':'text/html'}))

    resp.write(JSON.stringify(user))

    resp.end();
}).listen( 3000, ()=>{console.log("Server Runs On : http://localhost:3000")})

const http = require('http');



http.createServer(app).listen(8000,()=>{console.log(`server listen on 8080`)})


function app(req, res) {
    console.log('the request coming');
    res.end('success')
}
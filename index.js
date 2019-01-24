const http = require('http');



http.createServer(app).listen(3000,()=>{console.log(`server listen on 3000`)})


function app(req, res) {
    console.log('the request coming');
    res.end('success')
}
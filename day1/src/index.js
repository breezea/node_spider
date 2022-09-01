const express = require('express');
const app = express();
const spider1 = require('./superagent/example1.js');

app.get('/',function(req,res){
    res.send('hello world')
})

// let server = app.listen(3000, function () {

//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('your server is running at http://%s:%s', host, port);
// })
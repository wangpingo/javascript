/**
 * Created by 35031 on 2017/1/20.
 */
var http=require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    //res.writeHead("Access-Control-Orign","*");
    if (req.url=='/1'){
                res.writeHead(200, {'Content-Type': 'text/plain',"Access-Control-Allow-Origin":"*"})
              res.write('very good');
    }
    res.end();
}).listen(3000,'localhost');
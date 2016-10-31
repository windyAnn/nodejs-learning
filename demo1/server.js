var http = require("http"),
    url=require("url");
function start(route, handle) {
    function onReq(req, res) {
        var pathName = url.parse(req.url).pathname;
        console.log("request for" + pathName + "received");
       // res.writeHead(200, {"Content-Type": "text/plain"});
        route(handle,pathName,res);
      /*  res.write(content);
        res.end();*/
    }
    http.createServer(onReq).listen(8004);
    console.log("1111222");
}
function upload() {
    console.log("request hander 'uploads' was called");
}

exports.start = start;
exports.upload = upload;
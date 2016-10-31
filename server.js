var http = require("http");
function onReq(req,res) {
    console.log("request receive");  //为什么刷新一次打印两次呢？知道了，
    // 因为大部分服务器会访问localhost：8081和localhost：8081/favicon.ico
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("hello");
    res.end();
}
http.createServer(onReq).listen(8001);
console.log("1111");
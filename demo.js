//------------------------------------------------
//WebSvr.js
//  一个演示Web服务器
//------------------------------------------------

//开始服务启动计时器
console.time('[WebSvr][Start]');

//请求模块
var libHttp = require('http');    //HTTP协议模块
var libUrl=require('url');    //URL解析模块
var libFs = require("fs");    //文件系统模块
var libPath = require("path");    //路径解析模块

//Web服务器主函数,解析请求,返回Web内容
var funWebSvr = function (req, res){
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    //向控制台输出请求的路径
    //console.log(reqUrl);
    res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"});

    var reqUrl=req.url; //获取请求的url

    //向控制台输出请求的路径
    console.log(reqUrl);

    //使用url解析模块获取url中的路径名
    var pathName = libUrl.parse(reqUrl).pathname;
    console.log(pathName);
    if (pathName == "/anan") {
        res.end("<h1>Hello an an</h1>");
    } else if (pathName == "/anan/sy") {
        res.end("<h1>Hello an sy</h1>");
    } else {
        res.end("<h1>Url is Not exist</h1>");
    }

    var reqUrl=req.url; //获取请求的url

    //向控制台输出请求的路径
    console.log(reqUrl);

    //使用url解析模块获取url中的路径名
    var pathName = libUrl.parse(reqUrl).pathname;
    console.log(pathName);


}

//创建一个http服务器
var webSvr=libHttp.createServer(funWebSvr);

//指定服务器错误事件响应
webSvr.on("error", function(error) {
  console.log(error);  //在控制台中输出错误信息
});


//开始侦听8124端口
webSvr.listen(8124,function(){

    //向控制台输出服务启动的信息
    console.log('[WebSvr][Start] running at http://127.0.0.1:8124/');

    //结束服务启动计时器并输出
    console.timeEnd('[WebSvr][Start]');
});

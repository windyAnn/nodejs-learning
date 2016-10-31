/*function start() {
 console.log("request receive 'uploads' was called" );
 function sleep(ms) {
 var startT = new Date().getTime();
 if (new Date().getTime()>startT+ms){
 return "hello start";
 //这里了是因为被阻塞了吗？？？所以一次性输出的时候会报错
 //而debug却不会
 }

 }

 return sleep(1000);
 }
 function upload() {
 console.log("request hander 'uploads' was called");
 return "hello upload";
 }

 exports.start = start;
 exports.upload = upload;
 */
var exec = require('child_process').exec;//这个是引入nodejs模块的，只要照抄就好了
//Error: Cannot find module './child_process'
function start() {
    console.log("request handle 'start' was called");
    var content = "empty";
    exec('cat *.js bad_file | wc -l', function (error, stdout, stderr) {
        //  content = stdout;
        //这个'cat *.js bad_file | wc -l'，commond是啥啥意思啊
        //有时候调的进来有时候不行啥意思啊？？？
        if (error) {
            console.error("exec error: "+ error);
            return;
        }
        /*  console.log(`stdout: ${stdout}`);
         console.log(`stderr: ${stderr}`);*/
    });
    return content;
}
function upload() {
    console.log("request hander 'uploads' was called");
    return "hello upload";
}

exports.start = start;
exports.upload = upload;

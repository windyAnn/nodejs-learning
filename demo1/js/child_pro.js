exec = require("./child_process").exec;
function start() {
    console.log("request handle 'start' was called");
    var content = "empty";
    exec("ls-lah", function (error, stdout, stderr) {
        content = stdout;
    });
    return content;
}
function upload() {
    console.log("request hander 'uploads' was called");
    return "hello upload";
}

exports.start = start;
exports.upload = upload;
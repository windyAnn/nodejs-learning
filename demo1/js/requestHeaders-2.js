var  exec = require('child_process').exec;
function start(res) {
    console.log("request handler 'start' " );
    var body = '<!DOCTYPE html>'+
        '<html lang="en">'+
        '<head>'+
        '<meta charset="UTF-8">'+
        ' <title>Title</title>'+
        '</head>' +
        ' <body> <form> '+
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="submit text" />' +
        '</form> </body> </html>' ;


    exec('ls -lah', {timeout: 10000, maxBuffer: 20000*1024},
        function (error, stdout, stderr) {
            res.writeHead("200",  {"Content-Type": "text/plain"});
            res.write(stdout);
            res.end();
        })
}
function upload(res) {
    console.log("request handler 'upload' " );
    exec('ls -lah', function (error, stdout, stderr) {
        res.writeHead("200",  {"Content-Type": "text/plain"});
        res.write(stdout);
        res.end();
    });
}
exports.start = start;
exports.upload = upload;
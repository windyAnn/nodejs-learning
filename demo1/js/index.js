var server = require("../server"),
    route = require("./route"),
    requestHanders = require("./requestHanders"),
    handle = {};
    handle["/"] = requestHanders.start;
    handle["/start"] = requestHanders.start;
    handle["/upload"] = requestHanders.upload;
server.start(route.route, handle);
/*
handle={
"/":  requestHanders.start,
 "/start":  requestHanders.start,
 "/upload": requestHanders.upload
}

*/
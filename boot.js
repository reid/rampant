// Require the profiler and Developer Tools backend.
require("webkit-devtools-agent");

// Require the requested script specified from STDIN.
// require() is sync, so we need to read STDIN sync.
var fs = require("fs"),
    size = fs.fstatSync(process.stdin.fd).size,
    buffer = new Buffer(size),
    module = fs.readSync(process.stdin.fd, buffer, 0, size);

require(buffer.toString("utf8").trim());

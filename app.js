global.__rootDir = __dirname;

var http = require("http");
// var serveStatic = require("serve-static");
const fs = require("fs");
global.fs = fs;
const path = require("path");
global.path = path;

// require('./setupDB.js')

// require("./serverScripts/siteCache.js");

// const handlePageRequests = require("./serverScripts/handlePageRequests");
// const handlePostRequests = require("./serverScripts/handlePostRequests");

// Serve up public folder
// var staticServe = serveStatic(".", { index: ["index.html"] });

// Create server
var server = http.createServer(async function onRequest(req, res) {
    console.log('on request')
    res.end('It\'s OK, request processed')
  /* const parsedUrl = url.parse(req.url, true);
    let urlPath = parsedUrl.pathname;

    urlPath = urlPath.toLowerCase();

    if (req.method.toUpperCase() == "POST") {
      await handlePostRequests(req, res, parsedUrl);
      return;
    }

    if (["/robots.txt", "/sitemap.xml"].includes(urlPath)) {
      staticServe(req, res, finalhandler(req, res));
      return;
    }
    if (urlPath.startsWith("/assets/")) {
      staticServe(req, res, finalhandler(req, res));
      return;
    }

    // get page
    await handlePageRequests(req, res, parsedUrl); */
});

// Listen
server.listen(8080);

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason);
  // console.log('pages passed', global.pagesPassed);
  // console.log('wrongShots', global.wrongShots)

  // process.exit()
  // Application specific logging, throwing an error, or other logic here
});

process.on("uncaughtException", (err) => {
  console.log("Caught exception: ", err, err.message);
  // console.log('pages passed', global.pagesPassed);

  // process.exit()
});

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("welcome to aboutt");
    res.end();
  } else {
    res.end("oops!, we dont have the page you're looking for");
  }
});

server.listen(5329);

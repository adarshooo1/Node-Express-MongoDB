// Import the http module
const http = require("http");

// Create a server using http.createServer()
const server = http.createServer((req, res) => {

  // Setting header to text/html
  res.setHeader("Content-Type", "text/html")

  // Send an HTML response to the client
  res.end("<h1>Hello World in HTML</h1>");
});

// The server will listen on port 1010. Access it at http://localhost:1010
server.listen(1010);
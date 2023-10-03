const express = require("express");
const server = express();

// Basic Middleware: Logger for user info
server.use((req, res, next) => {
  // Log basic request information
  console.log(
    req.method, // HTTP method (GET, POST, etc.)
    req.ip, // IP address of the client
    req.hostname, // Hostname of the server
    new Date(), // Current date and time
    req.get("User-Agent") // User-Agent header (browser and OS information)
  );
  next();
});

// Auth Middleware
const auth = (req, res, next) => {
  console.log(req.query); //{ password: '123' }
  if (req.query.password === "123") {
    // Query should be like this to bypass this auth middleware: http://localhost:1010?password=123
    next();
  } else {
    res.sendStatus(401); // Unauthorized status if the password is incorrect
  }
};

server.use(auth); // Applied on the application level for all routes

// API - ENDPOINT - ROUTE
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.listen(1010, () => {
  console.log("Server is running at http://localhost:1010");
});

/*
# Note:
> When using (?) in the URL (e.g., https://localhost/1010?password=1234),
> Basic Middleware serves as a logger, providing information about the user's browser, IP address, request method, etc.
> Auth Middleware is applied at the application level (server.use(auth)), ensuring that the password is checked for all routes.
*/

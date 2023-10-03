const express = require("express");
const server = express();
server.use(express.json()); // Parse Incoming request with JSON payloads.

// Basic Middleware used as logger to get user info.
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-Agent")
  );
  next();
});

// Auth Middleware
const auth = (req, res, next) => {
  console.log(req.query);

  //   // (Not recommended)
  //   if (req.query.password == "123") {
  //   //Query should be like this to bypass this auth middleware => http://localhost:8080?password=123
  //     next();
  //   }

  //   // Moderate recommended
  if (req.body.password == "123") {
    //So by default express do not fetch request.body because there are several kind of encoding. So to use (req.body) we use server.use(express.json),A Built-In-Middleware.
    //Query should be like this to bypass this auth middleware => http://localhost:8080?password=123
    next();
  } else {
    res.sendStatus(401);
  }
};

// API - ENDPOINT - ROUTE
server.get("/", auth, (req, res) => { // Route Level Middleware, But the Problem is we have to write password as query which is not safe
  console.log(req.url); // Log the requested URL
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
  console.log("http://localhost:1010");
});

/*
# Note:
> server.use(express.json()); //Parse Incoming request with JSON payloads.
> Open Postman to make request set request to GET, then http://localhost:1010 , then go to body tab inside body choose json then write {"password" : "123"}. Enter. To Bypass this auth middleware in the router with builtin-middleware.
*/

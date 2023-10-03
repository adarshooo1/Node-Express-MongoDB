const express = require("express");
const server = express();

// Type 1:
server.use(express.json()); // Parse Incoming request with JSON payloads.

// Type 2:
server.use(express.urlencoded()); // We use it when we sending data through form in which url is encoded.

// Type 3:
server.use(express.static("public")); // For static hosting of index.html in public directory. Generally there are , icons which should to show at very first when we load a website.

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

  //  // (Not recommended)
  //  if (req.query.password == "123") {
  //  //Query should be like this to bypass this auth middleware => http://localhost:8080?password=123
  //    next();
  //  }

  //   // Moderate recommended
  if (req.body.password == "123") { //So by default express do not fetch request.body because there are several kind of encoding. So to use (req.body) we use server.use(express.json),A Built-In-Middleware.
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
> Three Type of Built-In-Middleware => 1. express.json() , 2. express.urlencoded() 3. express.static();
> express.json() when we send password in body with json format.
> express.static(), for static hosting, Here we are hosting index.html which has default path of (/) or /index.html, and for data.json the path is /data.json.
> express.urlencoded is used in html forms that submit the data using "application/x-www-form-urlencoded"
> Its because the path is (/) thats why it is override server.get("/") which has also the same path by default. 
*/

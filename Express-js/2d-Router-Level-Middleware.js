const express = require("express");
const server = express();

//Basic Middleware used as logger to get user info.
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
  console.log(req.query); // { password: '123' }

  // (not recommended) But just taken for this example, because writing password as a url-string might, will be visible to other, that can be dangerous.
  if (req.query.password == "123") {
    //Query should be like this to bypass this auth middleware => http://localhost:8080?password=123
    next();
  }

  else {
    res.sendStatus(401);
  }
};

// API - ENDPOINT - ROUTE
server.get("/", auth, (req, res) => { // Route Level Middleware, But the Problem is we have to write password as query which is not safe
  console.log(req.url); // Log the requested URL. # Output: /?password=123
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  console.log(req.url);
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
> Auth Middleware on Router level Ex: server.get("/" , auth, (req , res){....})
*/

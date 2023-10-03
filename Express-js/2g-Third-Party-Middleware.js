const express = require("express");
const morgan = require("morgan");
const server = express();

// Third Party Middleware
// server.use(morgan("tiny")); //  GET /get 304 - - 4.468 ms
// server.use(morgan("dev"));//  GET /get 200 7.466 ms - 14
server.use(morgan("default")); //  ::1 - - [Tue, 03 Oct 2023 12:41:03 GMT] "GET /get HTTP/1.1" 304 - "-" "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Mobile Safari/537.36"

// API - ENDPOINT - ROUTE
server.get("/get", (req, res) => {
  // Route Level Middleware, But the Problem is we have to write password as query which is not safe
  console.log(req.url); // Log the requested URL
  res.json({ type: "GET" });
});

// This type of request is called => url parameter
server.get("/product/:id", (req, res) => {
  console.log(req.params); //{ id: '1' }
  res.json({ type: "POST" });
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
> Third-Party-Middleware are those which are provided through express. Ex: morgan, cors, multer, etc...
> npm install morgan
> server.use(morgan("tiny"))
> req.url : http://localhoast:1010/product
> req.body : http://localhost:1010?password=123
> req.params : http://localhost:1010/:id
*/

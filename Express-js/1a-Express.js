//cmd: npm install express
const express = require("express"); //Require Express

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express(); //Server Created

// API - ENDPOINT - ROUTE
server.get("/", (req, res) => {
  console.log(req.url);
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
  console.log(req.url);
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  console.log(req.url);
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  console.log(req.url);
  res.json({ type: "PATCH" });
});
server.delete("/", (req, res) => {
  console.log(req.url);
  res.json({ type: "DELETE" });
});

//In Postman API, we can request all the API / Endpoint and get detailed response.

server.listen(1010, () => {
  console.log("http://localhost:1010");
});

/*
//Note:
> Express Installation: npm install express
> In Node we use res.end() to send response, but in express we use req.send().
> In express we don't have much need to set header. It automatically know what type of response we are sending.
> We cannot send type number to the server, It only accept objects and string
> If using req.sendFile(); Then path much be absolute; Ex: res.sendFile("C:/Users/Adarsh Singh/Desktop/github/Node Js/Node-Express-MongoDB/Node-js/5-NPM.txt");
> Read File: fs.readFileSync("data.json", "utf-8") reads the contents of the "data.json" file synchronously, returning a string. || Before parsing: data is a string (content of "data.json").
> JSON Parsing: JSON.parse(...) is then used to parse that string into a JavaScript object. So, after this line, data is an object containing the parsed data from the "data.json" file. || After parsing: data becomes a JavaScript object.
> To send status => res.status(404); || res.status(201).send(<h1>OK<h1>) => In network we can see the response 201, With text/html on screen.
 
*/

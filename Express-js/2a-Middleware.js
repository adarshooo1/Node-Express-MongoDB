//cmd: npm install express
const express = require("express"); //Require Express

const server = express(); //Server Created

//Custom Middleware
server.use((req, res, next) => {
  console.log(
    req.method, //GET
    req.ip, //::2
    req.hostname, //localhost
    new Date(), //2023-10-02T16:41:51.442Z
    req.get("User-Agent") //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
  );
  next(); //This function will let the server proceed to pass middleware
});

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

server.listen(1010, () => {
  console.log("http://localhost:1010");
});

/*
# Note:
> Express Installation: npm install express
> In Node we use res.end() to send response, but in express we use req.send().
> In express we don't have much need to set header. It automatically know what type of response we are sending.
> We cannot send type number to the server, It only accept objects and string
> If using req.sendFile(); Then path much be absolute; Ex: res.sendFile("C:/Users/Adarsh Singh/Desktop/github/Node Js/Node-Express-MongoDB/Node-js/5-NPM.txt");
> Read File: fs.readFileSync("data.json", "utf-8") reads the contents of the "data.json" file synchronously, returning a string. || Before parsing: data is a string (content of "data.json").
> JSON Parsing: JSON.parse(...) is then used to parse that string into a JavaScript object. So, after this line, data is an object containing the parsed data from the "data.json" file. || After parsing: data becomes a JavaScript object.
> To send status => res.status(404); || res.status(201).send(<h1>OK<h1>) => In network we can see the response 201, With text/html on screen.
*/

// // Part 1:///////////////////////////////////////////////////////////////////////////////////

// // How to make server in express?

// // How to start the server
// const express = require("express");
// // Initiate the server by calling as a function;
// const server = express();
// // This will run the server at this port;
// server.listen(1010)
// // https://localhost:1010

// // Part 2:///////////////////////////////////////////////////////////////////////////////////
// const express = require("express"); //Importing Express.

// // Comment of When use Example 2.d
// const fs = require("fs"); //Importing file system.

// const server = express(); //Creating Server with Express.

// // Comment of When use Example 2.d, Define products from data.json
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8")); // Here we can relative path as well.;
// const products = data?.products;

// // Example Part 2.a:
// server.get('/' , (req , res) =>{
//  res.send('Hello')
// // Content-Type : text/html; charset=utf-8 , Will get this information automatically on the browser without defining it.
// })

// // Example Part 2.b:
// server.get("/", (req, res) => {
//   res.status(201).send('<h1>Hello-World</h1>');
//   // Content-Type : text/html; charset=utf-8 , Will get this information automatically on the browser without defining it.
// });

// // Example Part 2.c:
// server.get("/", (req, res) => {
//     res.setHeader("Content-Type","text/html") //Here we are defining what ever we sending at the server as a content type text/html, Because by default it will not be defined.
//     res.sendFile("/Users/Adarsh Singh/Desktop/github/Node Js/Coder Dost Nodejs Tutorial/Day 3/package.json"); //Path must be absolute when we use sendFile() not like this sendFile("'index.js'") -this is called relative path. We can also use index.html , index.js ,Package.json instead of data.json as well , because it is converting all into String or text/html.
//   // Content-Type : text/html; charset=utf-8 , Will get this information automatically on the browser without defining it.
// });

// // Example Part 2.d:
// server.get("/", (req, res) => {
//   res.json(products);
//   // Content-Type : application/json; charset=utf-8
// });

// // This will run the server at this port;
// server.listen(1010)
// // https://localhost:1010

// // Part 3:///////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const server = express();

// // This is also known as Endpoints || Routes || API , But can't call this rest API.
// server.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// // We can check all this routes at postman api where we change the type of request accordingly and it may be possible that every request at the same path.

// server.listen(1010, () => {
//   console.log("http://localhost:1010");
// });

// // Part 4:///////////////////////////////////////////////////////////////////////////////////
// /* What is Middleware?
// Middleware in software development acts as a mediator between different components or layers
// of an application. It processes and enhances data as it moves between them, often used in web
// APIs for tasks like authentication, logging, and data validation. It ensures seamless
// communication, improves code reusability, and allows adding functionalities without
// modifying core components. */

const express = require("express");
const server = express();
// // A third-party middleware. Use it for Example: 4
// const morgan = require('morgan');

// // Example 1:
// // Way 1:
// // Making Application-Level-Middleware:
// server.use((req, res, next) => {
//   // We have all this information , which is used to get the information about the user and number of time request was made and managed with proper text files by an organization.
//   // console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent') ) //Output: GET, ::1, localhost, 2023-08-13T19:10:11.777Z, Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (HTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36
//   if (req.query.password == "1234") {
//         // Example Query : https://localhost:1010?paswword===1234
//     next(); // In Express, the next() function is used within middleware to signal the completion of the current middleware function and to pass control to the next middleware in the chain. It allows the application to continue processing subsequent middleware functions or route handlers. Without calling next(), the request might get stuck at a specific middleware, preventing further execution. It's essential for proper flow control and ensuring that all relevant middleware functions are executed in sequence.
//   } else {
//     res.sendStatus(401);
//   }
// });
// server.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put ("/", (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });
// server.listen(1010, () => {
//   console.log("http://localhost:1010");
// });


// // Way 2:
// const auth = (req , res , next)=>{
//   if(req.query.password == "1234"){
//     next()
//   }
//   else{
//     res.sendStatus(401);
//   }
// }
// server.use(auth)
// server.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put ("/", (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });
// server.listen(1010, () => {
//   console.log("http://localhost:1010");
// });


// // Way 3:
// const auth = server.use((req , res , next)=>{
//   if(req.query.password == "1234"){
//     next()
//   }
//   else{
//     res.sendStatus(401);
//   }
// })
// auth;
// server.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put ("/", (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });
// server.listen(1010, () => {
//   console.log("http://localhost:1010");
// });


// // Example 2:
// // Making Router-Level-Middleware:
// const auth = (req , res , next)=>{
// // Types of Fetching data Type 1:  
//   if(req.query.password == "1234"){
//     next()
//   }
//   else{
//     res.sendStatus(401);
//   }
// }

// // Making -API
// // Example of Router-Level-Middleware on the get , put and post Request, To check use it at Postman API.
// server.get("/", auth, (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put ("/", auth, (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", auth, (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });
// server.listen(1010, () => {
//   console.log("http://localhost:1010");
// });


// // Example 3:
// // Making Built-In-Middleware
// // Built-In-Middleware has 3 Middleware: 1. express.json, 2. express.static, 3. express.urlencoded.
// // express.json() Middleware :

// // Example 3.a :- express.json() Middleware Example. and at line:210 we can comment-in when we are watching example of express.json() and, comment-off when want to look at the example of express.static(). which is used to show static site at home page inside the public directory with index.html file init.
// server.use(express.json());

// // Example 3.b :- express.static() Middleware.
// // server.use(express.static('public')); // As the public has index.html so at the time when server start then it will bypass the middleware and show index.html very first, Because server find the index.html to show at webpage.

// const auth = (req , res , next)=>{
// // Types of getting data Part 2.  
//   if(req.body.password == "1234"){  //In postman use url- http://localhost:1010 , then go to the body , then click at the raw , then in side select json , and write {"password":"1234"}
//     next()
//   }
//   else{
//     res.sendStatus(401);
//   }
// }

// server.get("/", auth, (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put ("/", auth, (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", auth, (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });


// server.listen(1010, () => {
//   console.log("http://localhost:1010");
// });

// // Example 4:
// // Using Third-Party Middleware.

// server.use(express.json());
// server.use(morgan('combined')); //This will give information about many things like Example:::1 - - [14/Aug/2023:20:30:45 +0000] "GET /data.json HTTP/1.1" 304 - "-" "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36"
// server.use(express.static('public'));

// // Types of getting data Part 2.
// const auth = (req , res , next)=>{
//   if(req.body.password == "1234"){  //In postman use url- http://localhost:1010 , then go to the body , then click at the raw , then in side select json , and write {"password":"1234"}
//     next()
//   }
//   else{
//     res.sendStatus(401);
//   }
// }

// server.get("/", auth, (req, res) => {
//   res.json({ type: "GET" });
// });
// server.put ("/", auth, (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.post("/", auth, (req, res) => {
//   res.json({ type: "POST" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// server.listen(1010 , ()=>{
//   console.log("https://localhost:1010")
// })

// Example: 5
// Types of Query Passing type 3;

// Types of sending data to server Part 3.
server.get("/product/:id", (req, res) => { //In the get method we defined a path which is product/ then we have to pass any id, till its not defined.
  console.log(req.params)
  res.json({ type: "GET" });
});
server.put ("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.listen(1010 , ()=>{
  console.log("https://localhost:1010")
})



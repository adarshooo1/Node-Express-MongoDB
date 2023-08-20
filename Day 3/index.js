// Import the 'http' module
const http = require("http");

// Part of Way 4: Sample data
const data = { age: 5 };

// Part of Way 6: Import the 'fs' module (file system)
// fs is knows as file System, and it is in-built in node js, just we have to import it like this.
const fs = require("fs");

// 6.a : Read the content of the 'index.html' file
const html = fs.readFileSync("index.html", "utf8");

// To print html in the terminal
console.log(html);

// 6.b : Read the content of the 'data.json' file
const jsonData = fs.readFileSync("data.json" ,"utf-8" )

// 7: Parse the JSON content of 'data.json' file
const jsonData2 = JSON.parse(fs.readFileSync("data.json" ,"utf-8" ));
const products = jsonData2.products;


// Create an HTTP server
const server = http.createServer((req, res) => {

  // Way 1: This will print at the console, not at the server.
  console.log("Server Started")

  // Way 2: This will shown in the browser because we sending string as a response as a server.
  res.end("Hello World")

  // Way 3: This will set the content type html, so the user can know the the type of the page and response.
  res.setHeader("Content-Type" , "text/html")
  // This will return the html in the white background in the response.
  res.end("<h1>Hello</h1>")

  // Way 4: This will set the content type json so, that user can know the response returning is json.
  res.setHeader('Content-Type', 'application/json')
  // This will convert the json into sting so it will display at the browser console and the response will be application/json.
  res.end(JSON.stringify(data))
  // res.end(data)

  // Way 5: This will return the url of the page as response.
  res.end(req.url)

  // Way 6: This will return the html written in the file_name.html and json in data.json file.

  //6.a : Return the Html on the webpage and webpage will easily recognise that it is type of Html.
  res.setHeader("Content-Type" , "text/html")
  res.end(html)

  //6.b : Return the Json on the webpage and webpage will easily regognise that it is type of json.
  res.setHeader("Content-Type","application/json");
  res.end(jsonData)

  //Way 7: Here in this example, Route handling and response generation

  // Handle route for '/product' API
  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id===(+id))
    console.log(product)
    res.setHeader('Content-Type', 'text/html');
        let modifiedHtml = html.replace("**url**" ,product.thumbnail)
                           .replace("**title**" ,product.title)
                           .replace("**price**" ,product.price)
                           .replace("**rating**" ,product.rating)
        res.end(modifiedHtml);
        return;
  }

  // Handle different routes
  switch(req.url){
    case "/":
        res.setHeader("Content-Type" , "text/html")
        res.end("<h1>Hello World</h1> <br/> <p>API Route 1: /product <br/> API Route 2: /json</p>")
        break;
    case "/json":
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(jsonData2));
        break;
    default:  
        res.writeHead(404 , "Not Found");
        res.end();
    }

});

// This will run the server at this port.
server.listen(1010); //  https://localhost:1010

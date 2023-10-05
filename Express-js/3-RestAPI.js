const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

// Third-Party Middleware.
const morgan = require("morgan");
server.use(morgan("dev"));

// Built-In Middleware which helps in Parsing JSON Body Request.
server.use(express.json());


// C.R.U.D OPERATION => CREATE, READ, UPDATE and DELETE

// CREATE
// Create API of Product
server.post("/product", (req, res) => {
  console.log(req.body); //Return Undefined if server.use(express.json()) not used, Because when we send json in body then this will parse it.
  products.push(req.body); //This will push the data on the server not on the database and when we restart the server then it will gone. Its like we are just storing in a temporary database till server get restarted.
  res.status(201).json(req.body.title); //
});

// READ
// Read API of JSON products
server.get("/products", (req, res) => {
  console.log(req.url);
  res.status(200).json(products); //To explicitly return response in json. Generally for SEO Purpose.
});

// Read API of specific product in JSON data
// Assuming 'products' is an array of products available in our application
// Define a route to handle GET requests for fetching a product by its ID
server.get("/products/:id", (req, res) => {
  // Extract the 'id' parameter from the request URL
  const id = +req.params.id; // The '+' is used to convert the parameter to a number

  // Find the product with the specified ID in the 'products' array
  const product = products.find((p) => p.id === id);

  // Check if a product with the specified ID was found
  if (product) {
    // If found, send a JSON response with the product details
    res.status(200).json(product);
  } else {
    // If not found, send a 404 Not Found status with a JSON response
    res.status(404).json({ error: "Product not found" });
  }
});

// UPDATE (Moderate Used)
server.put("/products/:id", (req, res) => {
  const id = +req.params.id; //In url we give id as string so convert it into integer,Because in the json we have id in Integer with (+) operator.
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(200).json(products[productIndex]); //What ever the changes we made in body just send the response to the user.
});

// UPDATE - PATCH : Partial Update (Most Used)
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex);
  res.status(200).send(product);
});

// DELETE
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(200).json(product);
});

server.listen(1010, () => {
  console.log("http://localhost:1010");
});

/*
# Note:
> Base url, API ROOT:- http://localhost:1010 
> It is mandatory to send something to see the response on the server.
> Making Post request and sending data in body of type json then must use Built-In-Middleware of express.json() to parse json in body.
> When we make put request then we should be aware that when we create a new product then properly fill all the important field, because it ill override the previous, Suppose in the previous field we have 3 Rows and 12 Columns , But in latest we have 1 row and 4 columns then it will override to 1 rows and 4 columns, Hence, Update all the data.
> Code:- // products.splice(productIndex, 1, { ...req.body, id: id });
> All this is know as REST API architecture, where this api is performing CRUD Operation.
> But, This is not structured format of performing CRUD operation later we will follow MVC Pattern to perform CRUD Operation.
> 
*/

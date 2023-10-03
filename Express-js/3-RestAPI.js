const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

// Third-Party Middleware.
const morgan = require("morgan");
server.use(morgan("dev"));

// Built-In Middleware
server.use(express.json());

// Read API of JSON products
server.get("/products", (req, res) => {
  console.log(req.url);
  res.json(products); //To explicitly return response in json. Generally for SEO Purpose.
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
    res.json(product);
  } else {
    // If not found, send a 404 Not Found status with a JSON response
    res.status(404).json({ error: "Product not found" });
  }
});

// Create API of Product
server.post("/product", (req, res) => {
  console.log(req.body);  //Return Undefined if server.use(express.json()) not used, Because when we send json in body then this will parse it.
  res.json({ type: "POST" }); //I
});

server.listen(1010, () => {
  console.log("http://localhost:1010");
});

/*
# Note:
> Base url, API ROOT:- http://localhost:1010 
> It is mandatory to send something to see the response on the server.
> Making Post request and sending data in body of type json then must use Built-In-Middleware of express.json() to parse json in body.
*/

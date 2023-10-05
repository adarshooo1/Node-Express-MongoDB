const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Extract the 'products' array from the data.json
const products = data.products;

// Create // POST
exports.createProduct = (req, res) => {
  console.log(req.body); //Return Undefined if server.use(express.json()) not used, Because when we send json in body then this will parse it.
  products.push(req.body); //This will push the data on the server not on the database and when we restart the server then it will gone. Its like we are just storing in a temporary database till server get restarted.
  res.status(201).send("Product Created");
};


// Read All Products
exports.getAllProducts = (req, res) => {
  console.log(req.url); // Log the requested URL
  res.status(200).json(products); //To explicitly return response in json. Generally for SEO Purpose.
};

// Read Single Product by ID
exports.getProduct = (req, res) => {
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
};

// PUT || Replace Product by ID
exports.replaceProduct = (req, res) => {
  const id = +req.params.id; // Convert the 'id' parameter to a number
  const productIndex = products.findIndex((p) => p.id === id); // Find the index of the product with the specified ID
  products.splice(productIndex, 1, { ...req.body, id: id }); // Replace the product at the found index with the updated product
  res.status(200).json(products[productIndex]); // Respond with a JSON object containing the updated product
};

// Patch || Update Product by ID
exports.updateProduct = (req, res) => {
  const id = +req.params.id; // Convert the 'id' parameter to a number
  const productIndex = products.findIndex((p) => p.id === id); // Find the index of the product with the specified ID
  const product = products[productIndex]; // Get the product at the found index
  products.splice(productIndex); // Remove the product at the found index (this line seems incomplete, might need correction)
  res.status(200).send(product); // Respond with the removed product
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const id = +req.params.id; // Convert the 'id' parameter to a number
  const productIndex = products.findIndex((p) => p.id === id); // Find the index of the product with the specified ID
  const product = products[productIndex]; // Get the product at the found index
  products.splice(productIndex, 1); // Remove the product at the found index
  res.status(200).json(product); // Respond with a JSON object containing the deleted product
};
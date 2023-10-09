const express = require("express");

// Import product controller functions.
const {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

// Create an instance of Express Router.
const router = express.Router();

// Define routes and associate them with corresponding controller functions.
router
  .post("/", createProduct) // Create a new product.
  .get("/", getAllProducts) // Get all products.
  .get("/:id", getProduct) // Get a specific product by ID.
  .put("/:id", replaceProduct) // Replace a product with new data.
  .patch("/:id", updateProduct) // Update a product with new data.
  .delete("/:id", deleteProduct); // Delete a product by ID.

// Export the router to be used in other files.
exports.router = router;

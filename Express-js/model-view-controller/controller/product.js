const { Product } = require("../model/product");

// Create // POST
exports.createProduct = async (req, res) => {
  // Creating a new product object
  const product = new Product(req.body); //req.body for sending a json object to the database to store.

  // Method to calculate discount price when price and discount percentage is given.
  product.discountPrice = Math.round(
    product.price - product.price * (product.discountPercentage / 100)
  );
  try {
    // Save the product to the database
    const savedProduct = await product.save();

    // Log the saved product data to the console
    console.log("Product saved to the database:", savedProduct);

    // Respond with a JSON object containing the saved product data
    res.status(201).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// Read All Products
exports.getAllProducts = async (req, res) => {
  const allProduct = await Product.find();
  res.status(200).json(allProduct); //To explicitly return response in json. Generally for SEO Purpose.
};

// Read Single Product
exports.getProduct = async (req, res) => {
  // Extract the 'id' parameter from the request URL
  const id = req.params.id;
  // Find the product with the specified ID in the 'products' array
  const product = await Product.findOne({ _id: id });
  const product1 = await Product.findById(id); //Both are correct, But Difference is here mongoose provide findById which is == _id  and in findOne we have to specify that {_id is = to this id}.

  // Check if a product with the specified ID was found
  if (product) {
    // If found, send a JSON response with the product details
    res.status(200).json(product);
  } else {
    // If not found, send a 404 Not Found status with a JSON response
    res.status(404).json({ error: "Product not found" });
  }
};

// PUT || Replace Product
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    // Find and replace a product with the specified ID
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });

    // Calculate discount price
    product.discountPrice = Math.round(
      product.price - product.price * (product.discountPercentage / 100)
    );

    // Save the replaced product to the database
    const replacedProduct = await product.save();

    // Respond with a JSON object containing the replaced product
    res.status(201).json(replacedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Patch || Update Product
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    // Find and update a product with the specified ID
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    // Calculate discount price
    product.discountPrice = Math.round(
      product.price - product.price * (product.discountPercentage / 100)
    );

    // Save the updated product to the database
    const updatedProduct = await product.save();

    // Respond with a JSON object containing the updated product
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    // Find and delete a product with the specified ID
    const product = await Product.findOneAndDelete({ _id: id });

    // Respond with a JSON object containing the deleted product
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
  Note:
  - `await Product.findOne({ _id: id })`: Finds a single document by ID using Mongoose.
  - `await Product.findById(id)`: Also finds a single document by ID. findById is a shorthand for findOne({ _id: id }).
  - Both methods return a promise that resolves to the found document.
  - When using async/await, the execution waits for the promise to resolve before proceeding to the next line.
*/

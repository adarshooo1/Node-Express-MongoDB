require("dotenv").config(); //Require .env, So that we can use.
const express = require("express");
const morgan = require("morgan");

// Import Routes from the routes directory.
const productRouter = require("./routes/product");
const userRouter = require("./routes/users");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an instance of the Express server.
const server = express();

server.use(cors());
// Built-In Middleware
server.use(express.static(process.env.VIEW_DIR)); //Accessing view directory from env package

// Third-Party Middleware (Morgan for logging).
server.use(morgan("dev"));

// Built-In Middleware for parsing JSON request bodies.
server.use(express.json());

//Database connection with mongoose.
main().catch((err) => console.log(err)); //If problem persist while connecting the database throw error.

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/store");
  console.log("Database Connected Successfully !"); //If database connected successfully.
}

// Route Middleware: Mount the productRouter under the "/api" path. Ex: http:localhost:1010/api/products |or| /api/products/2
server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);

// Start the server on port 1010.
server.listen(process.env.PORT, () => {
  console.log("Server is running at http://localhost:1010");
});

/*
# Note:
> Morgan is a third-party middleware used for logging HTTP requests. It logs details such as HTTP method, URL, status code, and response time.
> Express.json() is a built-in middleware that parses incoming JSON payloads. It makes the parsed JSON data available on the request object.
> The productRouter is a custom router imported from the "./routes/product" file. It handles routes related to products and is mounted under the "/api" path.
> The server listens on port 1010, and a message is logged to the console when the server starts.
> Here we used dotenv package ->npm i dotenv, We are using it with creating a file named .env which hide all the important detail about the PORT, Passwords and keep it private, So that it cannot expose to others. 
*/

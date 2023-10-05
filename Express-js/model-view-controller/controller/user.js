const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Extract the 'users' array from the data.json
const users = data.users;


// Create // POST
exports.createUser = (req, res) => {
    console.log(req.body); //Return Undefined if server.use(express.json()) not used, Because when we send json in body then this will parse it.
    users.push(req.body); //This will push the data on the server not on the database and when we restart the server then it will gone. Its like we are just storing in a temporary database till server get restarted.
    res.status(201).send("User Created");
  };


// Read All users
exports.getAllUsers = (req, res) => {
  console.log(req.url); // Log the requested URL
  res.status(200).json(users); //To explicitly return response in json. Generally for SEO Purpose.
};

// Read Single user by ID
exports.getUsers = (req, res) => {
  // Extract the 'id' parameter from the request URL
  const id = +req.params.id; // The '+' is used to convert the parameter to a number

  // Find the user with the specified ID in the 'users' array
  const user = users.find((u) => u.id === id);

  // Check if a user with the specified ID was found
  if (user) {
    // If found, send a JSON response with the user details
    res.status(200).json(user);
  } else {
    // If not found, send a 404 Not Found status with a JSON response
    res.status(404).json({ error: "User not found" });
  }
};

// PUT || Replace User by ID
exports.replaceUser = (req, res) => {
  const id = +req.params.id; // Convert the 'id' parameter to a number
  const userIndex = users.findIndex((u) => u.id === id); // Find the index of the user with the specified ID
  users.splice(userIndex, 1, { ...req.body, id: id }); // Replace the user at the found index with the updated user
  res.status(200).json(users[userIndex]); // Respond with a JSON object containing the updated user
};

// Patch || Update User by ID
exports.updateUser = (req, res) => {
  const id = +req.params.id; // Convert the 'id' parameter to a number
  const userIndex = users.findIndex((u) => u.id === id); // Find the index of the user with the specified ID
  const user = users[userIndex]; // Get the user at the found index
  users.splice(userIndex); // Remove the user at the found index (this line seems incomplete, might need correction)
  res.status(200).send(user); // Respond with the removed user
};

// Delete a User by ID
exports.deleteUser = (req, res) => {
  const id = +req.params.id; // Convert the 'id' parameter to a number
  const userIndex = users.findIndex((u) => u.id === id); // Find the index of the user with the specified ID
  const user = users[userIndex]; // Get the user at the found index
  users.splice(userIndex, 1); // Remove the user at the found index
  res.status(200).json(user); // Respond with a JSON object containing the deleted user
};

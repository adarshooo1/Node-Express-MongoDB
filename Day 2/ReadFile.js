const fs = require("fs"); // Require the 'fs' module to access file system operations in Node.js

// Way 1; (Recommended)
// Asynchronous file read using 'fs.readFile'
fs.readFile("Demo.txt", "utf-8", (error, txt) => {
  // If there's an error while reading the file, log the error message to the console
  console.error("Error reading the file:", error);

  // If the file is read successfully, log its content to the console
  console.log("Asynchronous read:", txt);
});

// Way 2: (Block node server till the code not get execued)
// Synchronous file read using 'fs.readFileSync'
// Synchronously read the content of the file 'Demo.txt' in utf-8 encoding
const txt = fs.readFileSync("Demo.txt", "utf-8");

// If the file is read successfully, log its content to the console
console.log("Synchronous read:", txt);

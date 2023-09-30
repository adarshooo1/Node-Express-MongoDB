//Note:- By Default we are using type:CommonJs and in common js we use require for importing

// Reading File Of Demo.txt using File System
const fs = require("fs");

// Way 1:
// (Not - Recommended) Synchronous action pressurize server to run this specific task and letting other task in queue, which is blacking the server.
const txt2 = fs.readFileSync("Node-js/4b-FileSystem.txt", "utf-8"); //When ever we are trying to read a file we most use the directory name with the text file we want to read.
console.log(txt2);

const txt3 = fs.readFileSync(__dirname + "/4b-FileSystem.txt", "utf-8"); //__dirname help in to get the directory path without giving the absolute path.
console.log(txt3);

// Way 2:
fs.readFile(__dirname + "/4b-FileSystem.txt", "utf-8", (error, txt) => {
  if (error) {
    console.log(error);
  } else {
    console.log(txt);
  }
}); //(Recommended) because using it in callback thats why it is running Asynchronously which is not blocking the node server to run other tasks. This is happening in parallel

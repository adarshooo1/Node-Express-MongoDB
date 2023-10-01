const http = require("http");
const fs = require("fs");

// 1 : Sending Html File;
const textHtml = fs.readFileSync("8b-index.html", "utf-8");

// 2 : Sending JSON File;
const dataJSON = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  // Performing 1:
  res.setHeader("Content-Type", "text/html");
  res.end(textHtml);

  //   // Performing 2:
  //   res.setHeader("Content-Type", "application.json");
  //   res.end(dataJSON);

  console.log(req.url); //It will print the url we are requesting.
});

server.listen(1010);

/*
Note:
> So as we can see that we have to comment off one to see other at the same time in the browser. Because it has no endpoints or pointing to a url path. Which we will see in (8d-NodeServerEndpoints.js) file.
> To see both separately we have to comment one case between both.
*/

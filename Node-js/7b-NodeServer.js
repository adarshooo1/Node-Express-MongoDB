const http = require("http");
const data = { age: 21 };
const num = 100;
const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html"); //Set Header as text/html (Mostly Used)
  //   res.setHeader("Content-Type", "application/json"); //Set Header as application/json
  //   res.end("5"); // Parsed as HTML
  //   res.end(num); // Will throw an error, must be a string or parsed as String.
  //   res.end(num.toString()); //Convert Number to String, And By default parsed as String, If we set content-type : text/html then automatically become text/html
  //   res.end(JSON.stringify(5)); // Parsed as HTML
  //   res.end(JSON.stringify(data)); // Parsed as HTML
  //   res.end("<h1>This is HTML</h1>"); // It is HTML
  //   res.end(data); // Will create an error even when setting the header to text/html.
  console.log(req.url); //This will print the url in which we are requesting. Ex: http://localhost:8080/demo this will print /demo after the base url.
});

server.listen(8080);

/*
// Note:
 > Everything is parsed as a string in the server.
 > Sending a JSON object should first be converted into a string => JSON.stringify(data).
 > Setting Header: Content-Type : Text/Html will inform the browser to interpret the content as HTML, but it doesn't convert the data.
 > If we send anything without setting the header, it's marked as a JSON object by default.
 > If we send res.end(<h1>This is HTML</h1>), this will be interpreted as HTML, especially when the header is set.
 > If sending a string, it will be parsed as JSON by default.
 > If sending a number, it must be converted or parsed as a string.
 > If Content-Type: text/html => String and Json Objects will be act like text/html
 > If Content-Type: application/json => String and Json Objects will be act like application/json
 > Errors will be errors in both Html and Json
*/

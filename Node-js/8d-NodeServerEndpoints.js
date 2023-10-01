const http = require("http");
const fs = require("fs");

// 1 : Sending Html File;
const textHtml = fs.readFileSync("8b-index.html", "utf-8");

// 2 : Sending JSON File;
const dataJSON = fs.readFileSync("data.json", "utf-8");

// 3: Sending Html File:
const textHtml2 = fs.readFileSync("8c-index.html", "utf-8");

// 4: Sending data.json in the viewable format so user can see the product.
const dataJSON2 = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = dataJSON2.products;

// Error Page:
const errorPage = fs.readFileSync("error.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    const item = textHtml2
      .replace("**url**", product.thumbnail)
      .replace("**title**", product.title)
      .replace("**price**", product.price)
      .replace("**originalPrice**", product.originalPrice)
      .replace("**discountPercentage**", product.discountPercentage)
      .replace("**rating**", product.rating);
    res.end(item); //After Sending response.end(), It will now started execute further lines below like switch case thats why error to prevent use #return keyword.
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(textHtml);
      break; //Adding Break will save server to crash because in switch statement case will remain executing which cause unwanted response.
    case "/dataJson":
      res.setHeader("Content-Type", "application.json");
      res.end(dataJSON);
      break;
    case "/api":
      res.setHeader("Content-Type", "text/html");
      res.end(textHtml2);
      break;
    default:
      res.writeHead(404, "Page Not Found");
      res.end(errorPage); //Custom error page
  }

  console.log(req.url); //It will print the url we are requesting.
});

server.listen(1010);

/*
//Note:
> JSON.parse() is a method in JavaScript used to parse a JSON string and convert it into a JavaScript object.
> .replace helps in replace the string with the desired endpoint.
> using (+) with any string like "5" turn into integer. Ex: (p => p.id === +id) here we are comparing with integer, if the object have the same value of type integer
*/

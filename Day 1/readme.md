file 1: index1.js
In the file index1.js we just simply trying to print the hello world string in the with the help of node.js in the terminal.

file 2: Module2.js
In the file Module2.js we just making some function and exporting them with the help of export keyowrd.

file 3: Module3.js
In the file Module3.js we just trying to import the function we made in the module 2 with the help of require and import keyword.

Things we use while import and exporting;
In the package.json

{
    "type":"Module" ->When we export module
    "type":"Commonjs" ->When we export funtions only
    <!-- Note: We can we only one at one time -->
}


In the Day 2:

File 1: Demo.txt
In this file we just wrote some text and will try to read the content with fs: File System module.

File 2: ReadFile.js
In this file we saw syncronous and asyncronous ways to reading file, Async system of reading a file is recommended because to do not block the server. Where as Syncronous is not recommended because it do block the server and not letting other code to run till it not get executed.

File 3: package.json
In this file we will make package.json file which is the most important thing which gives information about the project it tells what version of the modules and libraries we are using in the project.

    Way 1:
    Steps to Make Package.josn file:
        cmd: npm init

    this will automatically make the package.json. What ever the modules and packages we want to install just we have to use cmd:- npm i module name. Which will show the name of the modules in the dependencies and dev-dependencies with the current versions we are using.
    dependencies :- Express
    devDependencies :- Nodemon

    To install: npm install/i module_name
    To Uninstall: npm usinsall module_name

    Way 2:
    Step 1: Make package.json file.
    Step 2: ```{
            "name": "Day 2",
            "version": "1.0.0",
            "description": "This is Day 2 package.json",
            "main": "index.js",
            "scripts": {
                "run": "node index.js",
                "start": "nodemon index.js"
            },
            "author": "",
            "license": "ISC",
            "dependencies": {
                //Installation cmd: npm install Express
                "express": "^4.18.2"
                },
            "devDependencies": {
                //Installation cmd: npm install nodemon --save-dev
                "nodemon": "^3.0.1"
                }
            }```


            Add all this in the package.json to perform the npm modules installation commands easily.
            Note When we install Express or Nodemon then it will make a package-lock.json which has all the module installed inside that file,
            So we avoid it to push that file at projection, So by Adding .gitignore in the root directory to avoid push un-usefull code.

File 4: .gitIgnore
In this file we just push the folder or directory name which we don't want to push while projection or at github because it is such a big file, So we just need to push package.json file which has all the necessary information about the code.
Simply Inside .gitignore we have to write full name of the folder or Directory to avoit it.
Ex: Inside .gitignore there is a text `node_modules`

File 5: index.js
In this file there is just Code which help in starting a server with the help of express.

To run index.js we have two script:

1. ```
   "scripts": {
                  "run": "node index.js",
              },
   ```

   To execute node index.js we have to write this cmd: npm run run.
   This will run a server once and struck and when we made any changes and save it then we have to again restart the server. which is type of continious task that take time.

2. ```
   "scripts": {
                   "start": "nodemon index.js"
               },
   ```
   To execute nodemon index.js we have to write this cmd: npm run start / npm start.
   This will run a server once and when we made any changes and save it then we don't have need to again restart the server.this will automatically restart the server which will save allot more time.


Things Need To Know:
1.cmd: npm outdate
    This will give the information that which mdoules and libraries are outdated and not upto date.

2.cmd: npm update
    This will update the modules and libraries which are not up-to-date.

3.cmd: npm install / i
    This will install all the madules and packages which are mentioned in the package.json inside the dependencies and dev-dependencies.

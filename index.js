//inbult node modules of node js

const fs = require("fs");
//will copy file1 as file 2 when we run (node index.js in node console) and run directly in vsCode
fs.copyFileSync("file1.txt", "file2.txt")

//external node modules by npmjs.com
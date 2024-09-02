// const fs = require('fs');

// fs.readFile("Open Source\PRACTICE\week 1\a.txt", "utf-8", function(err, data) {
//   console.log(data);
// });

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "a.txt");

fs.readFile(filePath, "utf-8", function(err, data) {
  console.log(data);
});
console.log("hello shiir") 
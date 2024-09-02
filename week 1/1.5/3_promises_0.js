const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    return new Promise(function (resolve) {

        const path = require('path');

        const filePath = path.join(__dirname, "a.txt");
        fs.readFile(filePath, "utf-8", function (err, data) {
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
    console.log(data)
}

kiratsReadFile().then(onDone)



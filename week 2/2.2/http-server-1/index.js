const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 3001
app.use(bodyParser.json())
app.post("/", (req, res) => {
  console.log(req.body)
  //header,body,query paramater
  // do machine learning model
  // res.send("hello")
  res.send('<b>hello world<b>')


  // res.json({
  //   Fullname:"Shirish",
  //   age : 29
  // })
})

app.post("/s", (req, res) => {


  console.log(req.headers["authorization"])
  res.send({
    name: "shirish",
    age: 29
  })


})

app.listen(port, () => {
  console.log("example")
})

// ========================================================more cleaner:
/*===============
// Import required modules
const bodyParser = require('body-parser');  // Middleware to parse incoming request bodies
const express = require('express');  // Framework for building web applications
const app = express();  // Initialize express app

const port = 3001;  // Define the port number

// Middleware to parse JSON data from incoming requests
app.use(bodyParser.json());

// POST endpoint to handle requests at root "/"
app.post("/", (req, res) => {
  
  // Log the request body (parsed JSON) to the console
  console.log(req.body);

  // Simulate a machine learning model process here if needed
  // Example: ML model can process `req.body` input data

  // Send an HTML response back to the client
  res.send('<b>Hello World</b>');

  // Alternatively, you can send a JSON response (uncomment the following block if needed)
  /*
  res.json({
    Fullname: "Shirish",
    age: 29
  });
  */
 /*=============
});

// POST endpoint to handle requests at "/s"
app.post("/s", (req, res) => {

  // Log the 'Authorization' header to the console
  console.log(req.headers["authorization"]);

  // Send a JSON response with some data
  res.send({
    name: "Shirish",
    age: 29
  });

});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("Server is running on port", port);  // Output when the server starts successfully
});
=======================*/
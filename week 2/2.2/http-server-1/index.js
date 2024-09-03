const express = require('express')
const app = express()
const port = 3001

app.get("/handler-route",(req,res)=>{
  //header,body,query paramater
  // do machine learning model
  // res.send("hello")
  res.json({
    Fullname:"Shirish",
    age : 29
  })
})
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port,()=>{
  console.log("example")
})
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.post || 3000

const app = express()
app.use(bodyParser.json())
app.post('/ss', (req, res) => {
    const message = req.body.message;
    console.log(message)
    res.json({
        // do machine learning model here 
        output: "2+2=4"
    })

})
app.listen(port, () => {
    console.log("example")
})
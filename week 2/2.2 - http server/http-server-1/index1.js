const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()

// app.use(bodyParser.json())
app.use(express.json())

app.post('/ss', (req, res) => {
    const message = req.query.message;
    console.log(message)
    res.json({
        // do machine learning model here 
        output: "2+2=4"
    })

})
app.listen(port, () => {
    console.log("example running on port",port)
})

/*
Imagine you run a restaurant, and customers send you their orders in written notes. You need someone to read and understand the notes (which are like requests) before you can process them.

app.use(bodyParser.json()): 
In the past, you hired a special person (the "body-parser" tool) just to read notes written in a specific format (like JSON). So every time a customer sends a note, this person reads it, converts it into a readable format, and hands it to you.

app.use(express.json()): 
Now, your restaurant got an upgrade. You no longer need that special person because your staff (Express) has learned to read the notes directly, without needing outside help. This is faster and simpler.
*/

//creating a http-server
//express
//node default library = no (like fs= default beacuse we dont need to install it )


const express = require('express')

const app = express()
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}
app.get('/', (req, res) => {

    const n = req.query.n;
    const ans = sum(n);
    res.send("ans is " + ans)
})

app.listen(3001)
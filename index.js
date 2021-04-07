const express = require('express');         //a.1
// 3.1 import dependencies
const bodyParser = require('body-parser')
const app = express();                      //a.2

const port = 3000;                          //a.3

//3.2 parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
//3.3 parse application/json
app.use(bodyParser.json())


app.get('/', (req, res)=> {                 //a.4
    res.send("ini path main rooth")
})

app.get('/wikipedia', (req, res) => {       //a.4
    res.send("ini pooth nya wikipedia")
})


app.listen(port, () => {                                    //a.5
    console.log(`Running to http://localhost:${port}`)
})
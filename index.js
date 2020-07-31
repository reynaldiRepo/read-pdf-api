// require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const fs = require("fs");
const crawler = require('crawler-request')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())



// for try pdf url
var url = "https://www.soundczech.cz/temp/lorem-ipsum.pdf"


app.get("/", (req, res) => {
    crawler(url).then(function(response){
        console.log(response)
        res.json(response)
    })
})

app.post("/read", (req, res)=>{
    console.log(req.body)
    pdfurl = req.body.URL;
    crawler(pdfurl).then(function(response){
        console.log(response)
        res.json(response)
    })
    
})





//listen to host
app.listen(process.env.PORT || 3000, () => {
    console.log("is Connect")
});
// require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const fs = require("fs");
const crawler = require('crawler-request')

// for try pdf url
var url = "https://www.soundczech.cz/temp/lorem-ipsum.pdf"


app.get("/", (req, res) => {
    // res.send("welcome to reynaldLancer "+ new Date())
    crawler(url).then(function(response){
        console.log(response)
        res.json(response)
    })
})



//listen to host
app.listen(process.env.PORT || 3000, () => {
    console.log("is Connect")
});
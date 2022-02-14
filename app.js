const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
// for public folder that contains static css & images
app.use(express.static("public"));
// for body-parser package
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/" ,(req, res) =>{
     var firstName = req.body.fName;
     var lastName = req.body.lName;
     var email = req.body.email;
     
});

app.listen(3000, ()=> {
    console.log(`Server is running on port 3000.`);
});
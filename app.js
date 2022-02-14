const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000, ()=> {
    console.log(`Server is running on port 3000.`);
});
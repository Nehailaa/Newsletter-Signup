const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
// for public folder that contains static css & images
app.use(express.static("public"));
// for body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    // Turn JS to a string
    var jsonData = JSON.stringify(data);

    // Make the request
    const url = "https://us14.api.mailchimp.com/3.0/lists/bbec6b7f63";
    const options = {
        method: "POST",
        auth: "nehaila:ff3031cb8f4c166d3e520a5eb28ac65e-us14"
    };

   const request=  https.request(url, options, response => {
        response.on("data", data => {
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();

});

app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});

//API KEY
//ff3031cb8f4c166d3e520a5eb28ac65e-us14

// List ID
//bbec6b7f63
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) {
   res.sendFile(__dirname + "/bmicalculator.html") 
});

app.post("/", function(req, res) {
   
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = Number(num1) + Number(num2);
    res.send(`the result is ${result}`);

});

app.post("/bmicalculator", function(req,res){
    let height = Number(req.body.height)/100;
    let weight = parseFloat(req.body.weight);
    let bmiResult = weight / (height * height);
    bmiResult = Math.round(bmiResult);
    res.send(`Your BMI is ${bmiResult}`);
});

app.listen(3000, function () {  
    console.log("server is running at port 3000");
});
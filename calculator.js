const express = require("express");
const parser = require("body-parser");
const app = express();

const port =3000;
app.use(parser.urlencoded({extended: true}));


app.get('/', (req, resp) => {
    resp.sendFile(__dirname+"/index.html");
});

app.post('/', (req, resp) => {
    var num1 = Number(req.body.num1);

    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    resp.send("The result is "+ result);
});


app.get('/bmicalculator', (req, resp) => {
    resp.sendFile(__dirname+"/bmiCalculator.html");
});


app.post('/bmicalculator', (req, resp) => {
    var w = Number(req.body.num1);

    var h = Number(req.body.num2);

    var result = w /(h * h);

    resp.send("The BMI is "+ result);
});


app.listen(3000, () => {
    console.log('Listening on port ' + port);
});
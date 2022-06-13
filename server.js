var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/get-request', function (req, res) {
    res.send(req.query.param1);
});

app.post('/post-request', function (req, res) {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const resultado = num1 + num2;
    res.send(`O Resultado é: ${resultado}`);


});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
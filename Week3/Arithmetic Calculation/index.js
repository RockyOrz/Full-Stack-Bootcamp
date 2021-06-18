const math = require('./math');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/', (req, res) => {
    let operation = req.body.operation;
    let val1 = parseFloat(req.body.val1);
    let val2 = parseFloat(req.body.val2);
    let result = 0;
    if (operation === 'add') {
        result = math.add(val1, val2);
    } else if (operation === 'sub') {
        result = math.sub(val1, val2);
    } else if (operation === 'mul') {
        result = math.mul(val1, val2);
    } else if (operation === 'div') {
        result = math.div(val1, val2);
    } else {
        return res.status(400).send("Operation not found");
    }

    return res.send(result.toString());
    // console.log(result);
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});
const express = require('express');
const app = express();

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// get requeset
app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send('Welcome to the first');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/sum', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    res.send(`The number you send is ${num1} and ${num2}
                The sum of two is ${sum}`);
});

app.get('/:first/:last', (req, res) => {
    console.log(req.params);
    res.send('Param test');
});

// post request
app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('Post request');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});


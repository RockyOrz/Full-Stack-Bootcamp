const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server lisening on port 3000.');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(myMiddleware);

function myMiddleware(req, res, next) {  // next is the next destination(route) 
    console.log('I am the middleware');
    next();
}

function myLocalMiddleware(req, res, next) {  // middleware apply to specific route
    console.log('I am the local middleware');
    next();
}


let students = [
    {id: 1, name: "John Wick", department: "Mathematics", age: 30},
    {id: 2, name: "Jennifer Lopez", department: "Literature", age: 40},
    {id: 3, name: "The Weekend", department: "Mechanical Engineering", age: 20},
];

app.get("/", myLocalMiddleware, (req, res) => {
    res.send(students);
});

app.post("/", (req, res) => {
    let newStudent = req.body;
    student.push(newStudent);
    res.redirect('/'); // redirect to the home page -> '/'
});

app.put("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let index = students.findIndex(student => {
        if (id == req.body.id) {
            return student.id === id;
        }
    });
    students[index] = req.body;
    res.redirect('/');
});

app.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let index = students.findIndex(student => {
        return student.id === id;
    });
    students.splice(index, 1); //delete an item from array
    res.redirect('/');
});
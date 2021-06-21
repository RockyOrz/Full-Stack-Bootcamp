const Student_manage = require("./stud_manage");
const express = require("express");
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var studentList = [
  { id: 1, name: "Andy", section: "1", gpa: 3.5, nationality: "Canada" },
  { id: 2, name: "Brady", section: "2", gpa: 3.0, nationality: "Canada" },
  { id: 3, name: "Cindy", section: "1", gpa: 3.7, nationality: "US" },
  { id: 4, name: "Daby", section: "2", gpa: 3.3, natonality: "Canada" },
  { id: 8, name: "Frank", section: "1", gpa: 3.7, natonality: "US" },
];

// Create Students Class
var students = new Student_manage();

// Insert students into the database
for (let i = 0; i < studentList.length; i++) {
  students.add(studentList[i]);
}

// Get all students
app.get("/", (req, res) => {
  let result = students.showAll();
  if (result != null) {
    res.send(result);
  } else {
    return "No students found";
  }
});

// Get a student
app.get("/:id", (req, res) => {
  let result = students.get(req.params.id);
  if (result != null) {
    res.send(result);
  } else {
    return "Student not found";
  }
});

// Add student
app.post("/", (req, res) => {
  let student = req.body;
  if (students.add(student) != null) {
    res.send(students.showAll());
  } else {
    res.send("ID number already exists");
  }
});

// Update student
app.put("/", (req, res) => {
  let student = req.body;
  if (students.update(student) != null) {
    res.send(students.showAll());
  } else {
    res.send("Student does not exist");
  }
});

//delete student
app.delete("/:id", (req, res) => {
  students.delete(req.params.id);
  res.send(students.showAll());
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

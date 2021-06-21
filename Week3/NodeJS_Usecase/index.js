var Student_manage = require('./stud_manage');

let studentList = [
    { id: 1, name: 'Andy', section: '1', gpa: 3.5, nationality: 'Canada'},
    { id: 2, name: 'Brady', section: '2', gpa: 3.0, nationality: 'Canada'},
    { id: 3, name: 'Cindy', section: '1', gpa: 3.7, nationality: 'US'},
    { id: 4, name: 'Daby', section: '2', gpa: 3.3, natonality: 'Canada'},
    { id: 8, name: 'Frank', section: '1', gpa: 3.7, natonality: 'US'}
];

let students = new Student_manage();

for (let i = 0; i < studentList.length; i++) {
    students.add(studentList[i]);
}

// console.log(students.get(1));

// let student = { id: 8, name: 'Frank', section: '2', gpa: 3.7, natonality: 'US'};
// students.update(student);
// students.showAll();

students.delete(4);
students.showAll();
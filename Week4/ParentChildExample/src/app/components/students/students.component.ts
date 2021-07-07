import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  info:string = '';
  textbox: any;

  students: Student[] = [
    {name: 'Andy', level: 'postgrad'},
    {name: 'Brady', level: 'undergrad'},
    {name: 'Rocky', level: 'undergrad'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getUndergrads(): Array<Student> {
    let tempArray = new Array<Student>();
    this.students.forEach(student => {
      if (student.level === 'undergrad') {
        tempArray.push(student);
      }
    });
    return tempArray;
  }

  deleteStudent(student:Student) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i] == student) {
        this.students.splice(i, 1);
      }
    }
  }
}

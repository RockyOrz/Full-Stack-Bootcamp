import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  homework: any;
  students: any;

  constructor(private service: StudentService) {
    this.service.getStudents().subscribe((student) => {
      this.students = student;
    });
  }

  ngOnInit(): void {}
}

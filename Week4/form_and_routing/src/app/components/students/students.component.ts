import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { 
    this.route.paramMap.subscribe((param) => {
      console.log(param.get('id'));
    });

    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  ngOnInit(): void {
  }

}

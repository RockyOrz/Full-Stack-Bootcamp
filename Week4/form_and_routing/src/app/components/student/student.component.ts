import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: any;
  @Output() onSubmitEvent = new EventEmitter();
  constructor(private service: StudentService, route: ActivatedRoute) {
    route.paramMap.subscribe((param) => {
      let studentId = param.get('id');

      if (studentId) {
        this.service.getStudent(parseInt(studentId)).subscribe((student) => {
          this.student = student;
        });
      }
    });
  }

  ngOnInit(): void {}

  onSubmit(student: any) {
    this.onSubmitEvent.emit(`${student.first_name} turned in homework`);
  }
}

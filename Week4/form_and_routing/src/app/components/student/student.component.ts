import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: any;
  @Output() onSubmitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(student: any) {
    this.onSubmitEvent.emit(`${student.name} turned in homework`);
  }
}

import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-undergrads',
  templateUrl: './undergrads.component.html',
  styleUrls: ['./undergrads.component.css']
})
export class UndergradsComponent implements OnInit, OnChanges {
  @Input() undergradsList: Student[] = new Array<Student>();

  @Input() messageFromParent: string = '';

  @Output() sendInfoEvent = new EventEmitter();

  @Output() deleteStudentEvent = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.messageFromParent = 'Test';
  }

  sendInfo() {
    this.sendInfoEvent.emit('Sending info to parent(Students)');
  }

  deleteStudent(student: Student) {
    this.deleteStudentEvent.emit(student);
  }

}

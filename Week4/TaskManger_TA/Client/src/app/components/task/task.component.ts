import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task; //@Input Passing object between two components
  constructor() {

  }

  ngOnInit(): void {
  }

}

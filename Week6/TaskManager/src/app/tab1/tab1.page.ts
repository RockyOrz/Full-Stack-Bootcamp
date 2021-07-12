import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tasks: Task[];

  constructor(private service: TaskService) {

  }
  
  ionViewWillEnter() {
    this.service.get_tasks().subscribe((tasks) => {
      this.tasks = tasks;
    }, (err) => {
      console.error(err);
    })
  }
}

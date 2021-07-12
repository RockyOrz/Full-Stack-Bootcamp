import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tasks: Task[];

  constructor(private service: TaskService) {}

  ionViewWillEnter() {
    this.service.get_pending().subscribe((tasks) => {
      this.tasks = tasks;
    }, (err) => {
      console.error(err);
    })
  }
}

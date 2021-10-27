import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  completedTasks;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.get_completed_tasks().subscribe(
      (tasks) => {
        this.completedTasks = tasks;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  toDoList;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.get_toDo_list().subscribe(
      (tasks) => {
        this.toDoList = tasks;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  
}

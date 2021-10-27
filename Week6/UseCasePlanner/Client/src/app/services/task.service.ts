import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Itask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get_completed_tasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL + '/completedTasks');
  }

  get_toDo_list(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL + '/toDoTasks');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}

  get_tasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  add_task(data: Task) {
    return this.http.post<Task[]>(this.apiURL, data)
  }

  get_pending(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL + '/filter?progress_level=pending' )
  }
}

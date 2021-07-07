import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/interfaces/Itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) {}

    get_tasks(): Observable<Task[]> {
      // HTTP client returns a observable automatically
      return this.http.get<Task[]>('http://localhost:3000');
    }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getStudent() {
    return this.http.get(this.apiURL);
  }

  getDepartments() {
    return this.http.get(this.apiURL + '/departments');
  }

  createStudent(student: object) {
    return this.http.post(this.apiURL, student);
  }

  deleteStudent(studentId: number) {
    return this.http.delete(this.apiURL + studentId);
  }
}

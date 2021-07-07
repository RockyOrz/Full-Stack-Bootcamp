import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    {id: 1, name: 'John Wick', age: 36, gender: 'male'},
    {id: 2, name: 'Ben Wick', age: 23, gender: 'male'},
    {id: 3, name: 'Jennifer Wick', age: 27, gender: 'female'},
  ]

  constructor() { }

  getStudent() {
    return this.students;
  }
}

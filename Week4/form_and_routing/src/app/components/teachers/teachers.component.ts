import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  homework: any;
  students = [
    {id: 1, name: 'John Wick'},
    {id: 2, name: 'Rose Bennth'},
    {id: 3, name: 'Jennifer Lopez'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

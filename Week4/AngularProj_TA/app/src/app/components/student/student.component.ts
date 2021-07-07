import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  name: string = 'Rocky';
  students: any[] = [];
  imageURL: string = "https://i.pinimg.com/originals/2b/2b/11/2b2b1110569856cc7b4962abf6695e9c.jpg";
  url: string = "https://google.com";
  cols: number = 2;
  bgClass: string = "blue-color"
  isInvisiable: boolean = false;
  bgColor: string = "purple"
  studentName: string = 'Andy'
  showBox: boolean = false;

  constructor(private service: StudentService) {  // Dependency injection in constructor
    this.students = service.getStudent();

  }

  ngOnInit(): void {}

  onClick() {
    alert("Clicked!");
  }

  blueClick(){
    this.isInvisiable = false;
    this.bgClass = "blue-color";
  }
  redClick(){
    this.isInvisiable = true;
    this.bgClass = "red-color";
  }

  toggleVisibility() {
    this.showBox = !this.showBox;
  }
}

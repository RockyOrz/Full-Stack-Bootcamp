import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm;

  constructor(private builder: FormBuilder, private studentService: StudentService) {
    this.studentForm = builder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gpa: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      depart_id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let formData = this.studentForm.value;
    this.studentService.createStudent(formData).subscribe((s) => {
      console.log(s);
    }, (err) => {
      console.log(err);
    });
  }

}

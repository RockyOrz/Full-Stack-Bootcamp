import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  studentForm;

  constructor(private builder:FormBuilder) {
    this.studentForm = builder.group({ // Return a FormGroup object

      //FormControl //default value in the bracket
      firstName: ["Jennifer", [Validators.required, Validators.minLength(3)]],    
      lastName: ["Lopez"],
      email: ["example@example.com"], 
    }); 
  }


  get firstNameControl() {
    return this.studentForm.get('firstName')!;
  }

  onSubmit() {
    console.log(this.studentForm.value)
  }

  ngOnInit(): void {
  }

}

// valid or invalid - Validator class will return true/false depend on the entered text and validation 
// touch or untouched - When clicked the input box will return true
// dirty or pristine - Once make it changed or enter something will always return true
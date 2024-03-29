import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private service:UserService, private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onFileChange(event:any) {  
      const file = event.target.files[0];
      this.registerForm.patchValue({
        image: file
      });    
  }

  register(){    
    let formData = this.registerForm.value;
    let f = new FormData();

    //Transfer of all formgroup data into the FormData object;
    for(let k in formData)
    {
      f.append(k, formData[k]);
    }
    
    this.service.register(f).subscribe((result) => {
      alert('Register successful!');
    }, (err) => {
      alert('Register failed!');
      console.log(err);
    });
  }

}

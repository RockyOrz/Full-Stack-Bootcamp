import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IdentityService } from 'src/app/services/identity.service';
// import { CheckPasswords } from 'src/app/custom_validatiors/checkPassword';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  user_not_exist: boolean = false;
  incorrect_password: boolean = false;
  success_register_msg: boolean = false;
  duplicate_email: boolean = false;
  identity: string = '';
  @ViewChild('signInClosebtn') signInClosebtn: any;
  @ViewChild('registerClosebtn') registerClosebtn: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private identityService: IdentityService
  ) {}

  signInForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  registerForm = this.formBuilder.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirm_password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  signIn() {
    let data = this.signInForm.value;
    this.authService.signIn(data).subscribe(
      (user) => {
        if (user) {
          if (this.identity === 'applicant') {
            this.identityService.check_applicant(user.user_id).subscribe(
              () => {
                this.signInClosebtn.nativeElement.click();
                this.registerForm.reset();
                this.router.navigate(['/job-board'], {
                  queryParams: { page: '1' },
                });
              },
              (err) => {
                this.incorrect_password = false;
                this.user_not_exist = true;
              }
            );
          }

          if (this.identity === 'employer') {
            this.identityService.check_employer(user.user_id).subscribe(
              () => {
                this.signInClosebtn.nativeElement.click();
                this.registerForm.reset();
                this.router.navigate(['/employer-dashboard'], {
                  queryParams: { page: '1' },
                });
              },
              (err) => {
                this.incorrect_password = false;
                this.user_not_exist = true;
              }
            );
          }
        }
      },
      (err) => {
        if (err.status === 401) {
          this.incorrect_password = true;
          this.user_not_exist = false;
        }

        if (err.status === 404) {
          this.incorrect_password = false;
          this.user_not_exist = true;
        }
      }
    );
  }

  register() {
    let data = this.registerForm.value;

    this.authService.register(data).subscribe(
      (user) => {
        if (user) {
          if (this.identity === 'applicant') {
            this.identityService
              .register_as_applicant(user.user_id)
              .subscribe();
          }

          if (this.identity === 'employer') {
            this.identityService.register_as_employer(user.user_id).subscribe();
          }

          this.registerForm.reset();
          this.registerClosebtn.nativeElement.click();
          this.success_register_msg = true;
          setTimeout(() => {
            this.success_register_msg = false;
          }, 4000);
        }
      },
      (err) => {
        if (err.status === 500) {
          this.duplicate_email = true;
        }
      }
    );
  }
}

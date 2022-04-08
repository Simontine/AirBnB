import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 forgetPassword: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  get uEmail() {
    return this.loginForm.get('email');
  }

  get uPassword() {
    return this.loginForm.get('password');
  }

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
  });

  signup() {
    this.router.navigate(['signup']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      alert('please fill all fields');
    }
  }

  ForgetPassword()
  {
    this.forgetPassword = true;
  }

  reset()
  {
    this.forgetPassword = false;
  }

}

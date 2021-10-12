import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHENTICATED_USER, AuthenticationService } from '../servives/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


export class Login {


  constructor(
    public username: string,
    public password: string,
  ) {
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailaddress = '';
  error = '';
  invalidUser = false;
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailaddress: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControl() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // this.alertService.clear();

    if (this.loginForm.invalid) { return; }

    this.loading = true;

    this.authService.login(this.formControl.emailaddress.value, this.formControl.password.value).then(user => {
      this.router.navigate(['/']);
    });
  }

 // get auth() { return this.loginForm.controls; }
}

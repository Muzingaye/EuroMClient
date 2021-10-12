import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AUTHENTICATED_USER, AuthenticationService} from '../servives/authentication.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstname = '';
  submitted = false;

  registerForm: FormGroup;
  private lastName: string;
  private phoneNumber: string;
  private emailAddress: string;
  private password: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    return this.authService.register(this.formControl.firstname.value,
      this.formControl.lastName.value,
      this.formControl.phoneNumber.value,
      this.formControl.emailAddress.value,
      this.formControl.password.value).then(data => {
      this.router.navigate(['/']);
    });
  }
}

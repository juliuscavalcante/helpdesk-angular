import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/model/credentials';
import { FormControl, Validators } from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.toast.error('The email or password is incorrect', 'Login');
    this.credentials.password = '';
  }

  fieldValidation(): boolean {
    if (this.email.valid && this.password.valid) {
      return true;
    } else {
      return false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/model/credentials';
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";

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

  constructor(
      private toast: ToastrService,
      private service: AuthService,
      private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.service.authenticate(this.credentials).subscribe(response => {
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.router.navigate([''])
    }, () => {
      this.toast.error('The email or password is incorrect');
    })
  }

  fieldValidation(): boolean {
    return this.email.valid && this.password.valid;
  }
}





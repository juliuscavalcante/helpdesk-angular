import { Component, OnInit } from '@angular/core';
import { Technician } from "../../../model/technician";
import { FormControl, Validators } from "@angular/forms";
import { TechnicianService } from "../../../service/technician.service";
import { ToastrService } from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-technician-update',
  templateUrl: './technician-update.component.html',
  styleUrls: ['./technician-update.component.css']
})
export class TechnicianUpdateComponent implements OnInit {

  technician: Technician = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    cretionDate:  ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.required]);
  email: FormControl = new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
      private service: TechnicianService,
      private toast: ToastrService,
      private router: Router,
      private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.technician.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.technician.id).subscribe(response => {
      response.profiles = [];
      this.technician = response;
    });
  }

  update(): void {
    this.service.update(this.technician).subscribe(() => {
      this.toast.success('Technician successfully updated', 'Update');
      this.router.navigate(['technician']);
    }, ex => {
      console.log(ex);
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  addProfile(profile: any): void {
    if(this.technician.profiles.includes(profile)) {
      this.technician.profiles.splice(this.technician.profiles.indexOf(profile), 1);
    } else {
      this.technician.profiles.push(profile);
    }
  }

  fieldValidation(): boolean {
    return this.name.valid &&
        this.cpf.valid &&
        this.email.valid &&
        this.password.valid;
  }

}

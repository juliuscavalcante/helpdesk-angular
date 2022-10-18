import { Component, OnInit } from '@angular/core';
import { Technician} from "../../../model/technician";
import { FormControl, Validators } from "@angular/forms";
import { TechnicianService } from "../../../service/technician.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-technician-delete',
  templateUrl: './technician-delete.component.html',
  styleUrls: ['./technician-delete.component.css']
})
export class TechnicianDeleteComponent implements OnInit {

  technician: Technician = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    cretionDate:  ''
  }

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

  delete(): void {
    this.service.delete(this.technician.id).subscribe(() => {
      this.toast.success('Technician successfully delete', 'Delete');
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
}

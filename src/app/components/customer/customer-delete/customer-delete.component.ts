import { Component, OnInit } from '@angular/core';
import { Customer} from "../../../model/customer";
import { FormControl, Validators } from "@angular/forms";
import { CustomerService } from "../../../service/customer.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profiles:     [],
    cretionDate:  ''
  }

  constructor(
      private service: CustomerService,
      private toast: ToastrService,
      private router: Router,
      private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.customer.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.customer.id).subscribe(response => {
      response.profiles = [];
      this.customer = response;
    });
  }

  delete(): void {
    this.service.delete(this.customer.id).subscribe(() => {
      this.toast.success('Customer successfully delete', 'Delete');
      this.router.navigate(['customer']);
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

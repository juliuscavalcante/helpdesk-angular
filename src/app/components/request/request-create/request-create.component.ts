import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Customer } from "../../../model/customer";
import { Technician } from "../../../model/technician";
import { CustomerService } from "../../../service/customer.service";
import { TechnicianService } from "../../../service/technician.service";
import { RequestService } from "../../../service/request.service";
import { Request } from "../../../model/request";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

    request: Request = {
        priority:       '',
        status:         '',
        title:          '',
        notes:          '',
        technician:     '',
        customer:       '',
        customerName:   '',
        technicianName: '',
    }

    customers: Customer[] = []
    technicians: Technician[] = []

  priority: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  title: FormControl = new FormControl(null, [Validators.required])
  notes: FormControl = new FormControl(null, [Validators.required])
  technician: FormControl = new FormControl(null, [Validators.required])
  customer: FormControl = new FormControl(null, [Validators.required])

  constructor(
      private requestService: RequestService,
      private customerService: CustomerService,
      private technicianService: TechnicianService,
      private toastService: ToastrService,
      private router: Router,
  ) { }

  ngOnInit(): void {
        this.findAllCustomers();
        this.findAllTechnician();
  }

  create(): void {
        this.requestService.create(this.request).subscribe(request => {
            this.toastService.success('Request created successfully', 'New Request');
            this.router.navigate(['requests']);
        }, ex => {
            this.toastService.error(ex.error.error);
        })
  }

  findAllCustomers(): void {
        this.customerService.findAll().subscribe(request => {
            this.customers = request;
        })
  }

    findAllTechnician(): void {
        this.technicianService.findAll().subscribe(request => {
            this.technicians = request;
        })
    }

  fieldValidation(): boolean {
    return this.priority.valid &&
           this.status.valid &&
           this.title.valid &&
           this.notes.valid &&
           this.technician.valid &&
           this.customer.valid
  }

}

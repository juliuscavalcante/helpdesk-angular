import { Component, OnInit } from '@angular/core';
import { Request } from "../../../model/request";
import { Customer } from "../../../model/customer";
import { Technician } from "../../../model/technician";
import { FormControl, Validators } from "@angular/forms";
import { RequestService } from "../../../service/request.service";
import { CustomerService } from "../../../service/customer.service";
import { TechnicianService } from "../../../service/technician.service";
import { ToastrService}  from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-request',
  templateUrl: './request-update.component.html',
  styleUrls: ['./request-update.component.css']
})
export class RequestUpdateComponent implements OnInit {

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
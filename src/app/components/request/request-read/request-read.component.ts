import { Component, OnInit } from '@angular/core';
import { Request } from "../../../model/request";
import { RequestService } from "../../../service/request.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-request-read',
  templateUrl: './request-read.component.html',
  styleUrls: ['./request-read.component.css']
})
export class RequestReadComponent implements OnInit {


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

  constructor(
      private requestService: RequestService,
      private toastService: ToastrService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.request.id = this.route.snapshot.paramMap.get('id');
  }

  findById(): void {
    this.requestService.findById(this.request.id).subscribe(request => {
      this.request = request;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  returnStatus(status: any): string {
    if (status == '0') {
      return 'OPEN'
    } else if  (status == '1') {
      return 'PROGRESS'
    } else {
      return 'CLOSED'
    }
  }

  returnPriority(priority: any): string {
    if (priority == '0') {
      return 'LOW'
    } else if  (priority == '1') {
      return 'MEDIUM'
    } else {
      return 'HIGH'
    }
  }
}
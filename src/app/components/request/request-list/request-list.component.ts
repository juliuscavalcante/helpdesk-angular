import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Request } from "../../../model/request";
import { MatPaginator } from "@angular/material/paginator";
import { RequestService } from "../../../service/request.service";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  ELEMENT_DATA: Request[] = []
  FILTERED_DATA: Request[] = []

  displayedColumns: string[] = ['id', 'title', 'customer', 'technician', 'openingDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource<Request>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
      private service: RequestService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(request => {
      this.ELEMENT_DATA = request;
      this.dataSource = new MatTableDataSource<Request>(request);
      this.dataSource.paginator = this.paginator;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  orderByStatus(status: any): void {
    let list: Request[] = []
    this.ELEMENT_DATA.forEach(element => {
      if (element.status == status)
        list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Request>(list);
    this.dataSource.paginator = this.paginator;
  }
}

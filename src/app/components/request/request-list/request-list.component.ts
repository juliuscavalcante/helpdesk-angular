import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Request } from "../../../model/request";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  ELEMENT_DATA: Request[] = []



  displayedColumns: string[] = ['id', 'title', 'customer', 'technician', 'openingDate', 'priority', 'status', 'actions'];
  dataSource = new MatTableDataSource<Request>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

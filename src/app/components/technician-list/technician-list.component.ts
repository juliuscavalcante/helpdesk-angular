import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Technician } from "../../model/technician";

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {

  ELEMENT_DATA: Technician[] = [
    {
      id: 1,
      name: 'Daemon Targaryen',
      cpf: '986.676.600-43',
      email: 'daemon@email.com',
      password: '123',
      profiles: ['0'],
      cretionDate: '10/10/2022'
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'actions'];
  dataSource = new MatTableDataSource<Technician>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


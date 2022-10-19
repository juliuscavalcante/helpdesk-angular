import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Customer } from "../model/customer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${API_CONFIG.baseUrl}/customer/${id}`);
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_CONFIG.baseUrl}/customer`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${API_CONFIG.baseUrl}/customer`, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_CONFIG.baseUrl}/customer/${customer.id}`, customer);
  }

  delete(id: any): Observable<Customer> {
    return this.http.delete<Customer>(`${API_CONFIG.baseUrl}/customer/${id}`);
  }
}

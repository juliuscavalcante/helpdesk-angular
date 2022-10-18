import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Technician } from "../model/technician";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Technician> {
    return this.http.get<Technician>(`${API_CONFIG.baseUrl}/technician/${id}`);
  }

  findAll(): Observable<Technician[]> {
    return this.http.get<Technician[]>(`${API_CONFIG.baseUrl}/technician`);
  }

  create(technician: Technician): Observable<Technician> {
    return this.http.post<Technician>(`${API_CONFIG.baseUrl}/technician`, technician);
  }

  update(technician: Technician): Observable<Technician> {
    return this.http.put<Technician>(`${API_CONFIG.baseUrl}/technician/${technician.id}`, technician);
  }
}
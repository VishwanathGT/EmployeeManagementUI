import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':  'application/json'
    })
  };

  saveEmployee(emp: Employee): Observable<any> {
    return this.http.post('http://localhost:8080/api/employee', emp, this.httpOptions);
  }

  loadEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/api/employees', this.httpOptions);
  }
}


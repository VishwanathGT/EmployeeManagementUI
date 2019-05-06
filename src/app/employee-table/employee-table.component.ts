import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor( private empService: EmployeeService) { }

  employees: [Employee];



  ngOnInit() {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.empService.loadEmployees().subscribe(response => {
      this.employees = response;
      console.log(response);
    }, response => {
      console.log('Error');
    });
  }

}

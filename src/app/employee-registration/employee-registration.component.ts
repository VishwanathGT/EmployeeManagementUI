import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private empService: EmployeeService) { }

  employee: Employee;
  message = '';
  empForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    gender: [''],
    dob: [''],
    dept: ['']
  });


  ngOnInit() {
  }

  onSubmit() {
    this.employee = new Employee();
    this.employee.firstName = this.empForm.get('firstName').value;
    this.employee.lastName = this.empForm.get('lastName').value;
    this.employee.gender = this.empForm.get('gender').value;
    this.employee.dob = this.empForm.get('dob').value;
    this.employee.dept = this.empForm.get('dept').value;
    console.log('------------> ' + this.employee.firstName);
    this.empService.saveEmployee(this.employee).subscribe(response => {
      this.message = 'Emplyee created successfully';
      this.empForm.get('firstName').setValue('');
      this.empForm.get('lastName').setValue('');
      this.empForm.get('gender').setValue('');
      this.empForm.get('dob').setValue('');
      this.empForm.get('dept').setValue('');
    }, response => {
      console.log('Error');
    });
  }
}

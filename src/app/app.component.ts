import { Component, OnInit } from '@angular/core';
import { NgAnalyzeModulesHost } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management Application';

  flag: Boolean = false;

  registerEmp() {
    this.flag = true;
  }

  backToTable() {
    this.flag = false;
  }
}

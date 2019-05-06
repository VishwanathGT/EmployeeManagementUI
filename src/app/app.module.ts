import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTableComponent } from './employee-table/employee-table.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    EmployeeTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

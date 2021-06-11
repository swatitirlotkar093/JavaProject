import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employee-list.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeDetailsComponent } from './update-employee.component';
import { EmployeeDetailComponent } from './employee-details.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeelistComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: EmployeeDetailsComponent },
  { path: 'details/:id', component: EmployeeDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, Input, OnInit } from '@angular/core';
import { employee } from './employee';
import { Router } from '@angular/router';
import { EmployeeService } from "./employee.service";
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';


@Component
  ({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
  })

export class CreateEmployeeComponent implements OnInit {
  employee: employee = new employee();
  submitted = false;
  /*myForm = {
    firstname: '',
    lastname: '',
    email: ''
  }*/
  constructor(private es: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.submitted = false;
  }

    myForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(10)])
    });


  get EmployeeFirstName() {
    return this.myForm.get('firstname');
  }

  get EmployeeEmail() {
    return this.myForm.get('email');
  }

  get EmployeeLastName() {
    return this.myForm.get('lastname');
  }

  saveStudent(saveStudent: any) {
    console.log('clicked');
    this.employee = new employee();
    this.employee.firstname = this.EmployeeFirstName?.value;
    this.employee.lastname = this.EmployeeLastName?.value;
    this.employee.email = this.EmployeeEmail?.value;
    this.employee.active = true;

    console.log(this.employee.firstname);
    console.log(this.employee.lastname);
    console.log(this.employee.email);
    console.log(this.employee.active);

    this.onSubmit();
  }



  /*newEmployee(myForm: any): void {
    console.log('clicked');
    this.submitted = false;
    this.employee = new employee();
    this.employee.firstname = myForm.controls.firstname.value;
    this.employee.lastname = myForm.controls.lastname.value;
    this.employee.email = myForm.controls.email.value;
    this.employee.active = true;

    console.log(console.log(myForm.controls.firstname.value));
    console.log(console.log(myForm.controls.lastname.value));
    console.log(console.log(myForm.controls.email.value));
    console.log(console.log(this.employee.firstname));
    console.log(console.log(this.employee.lastname));
    console.log(console.log(this.employee.email));

    this.onSubmit();
  }*/


  /*save() {
    console.log('inside save method');
    this.es.createemployee(this.employee).
      subscribe(
        data => console.log("data is::"+data),
        error => console.log("error is::"+error));
    this.employee = new employee();
    this.goToList();
  }*/

  save() {
    this.es.createemployee(this.employee).subscribe(data => {
      console.log("data is::" + data)
      this.employee = new employee();
      this.goToList();
    },
      error => console.log("error is::" + error));
  }


  onSubmit() {
    console.log('calling onsubmit');
    alert('calling onsubmit');
    this.submitted = true;
    this.save();
  }

  /*onSubmit(myForm: any) {
    this.employee = new employee();
    this.employee.firstname = myForm.controls.firstname.value;
    console.log(this.employee.firstname);

    this.employee.lastname = myForm.controls.lastname.value;
    console.log(this.employee.lastname);

    this.employee.email = myForm.controls.email.value;
    console.log(this.employee.email);
  }*/
  goToList() {
    this.router.navigate(['/employees']);
  }

  get f() {
    return this.myForm.controls;
  }



}


import { employee } from './employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeelistComponent } from './employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  /*selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']*/
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  emp: employee = new employee();
  submitted = false;
  /*myForm = {
    firstName: '',
    lastName: '',
    emailId: ''
  }*/
  //employee: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private es: EmployeeService) { }

  ngOnInit() {
    this.emp = new employee();

    this.id = this.route.snapshot.params['id'];
    console.log("id is::" + this.id);

    this.es.getemployee(this.id)
      .subscribe(data => {
        console.log("data is::"+data)
        this.emp = data;
      }, error => console.log(error));
  }

  myForm = new FormGroup({
    id : new FormControl(),
    firstname: new FormControl(),
    email: new FormControl(),
    lastname: new FormControl()
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

  get EmployeeId() {
    return this.myForm.get('id');
  }


  updateEmp(updateEmp: any) {
    console.log('clicked'); 
    this.submitted = false;
    this.emp = new employee();
    this.emp.id = this.EmployeeId?.value;
    this.emp.firstname = this.EmployeeFirstName?.value;
    this.emp.lastname = this.EmployeeLastName?.value;
    this.emp.email = this.EmployeeEmail?.value;
    this.emp.active = true;

    console.log(this.emp.firstname);
    console.log(this.emp.lastname);
    console.log(this.emp.email);
    console.log(this.emp.active);

    this.onSubmit();
  }

  /*updateEmp(myForm: any): void {
    console.log('clicked');
    this.submitted = false;
    this.emp = new employee();
    this.emp.firstname = myForm.controls.firstname.value;
    this.emp.lastname = myForm.controls.lastname.value;
    this.emp.email = myForm.controls.email.value;
    this.emp.active = true;

    console.log(console.log(myForm.controls.firstname.value));
    console.log(console.log(myForm.controls.lastname.value));
    console.log(console.log(myForm.controls.email.value));
    console.log(console.log(this.emp.firstname));
    console.log(console.log(this.emp.lastname));
    console.log(console.log(this.emp.email));

    this.onSubmit();


  }*/

  updateEmployee() {
    this.es.updateEmployee(this.id, this.emp)
      .subscribe(data => {
        console.log(data);
        this.emp = new employee();
        this.employee_list();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }
  employee_list() {
    this.router.navigate(['employees']);
  }

  get f() {
    return this.myForm.controls;
  }

}

import { employee } from './employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeelistComponent } from './employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id!: number;
  employee!: employee;

  constructor(private route: ActivatedRoute, private router: Router,
    private es: EmployeeService) { }

  ngOnInit() {
    this.employee = new employee();

    this.id = this.route.snapshot.params['id'];
    console.log("id is::" + this.id);

    this.es.getemployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  employee_list() {
    this.router.navigate(['employees']);
  }
}

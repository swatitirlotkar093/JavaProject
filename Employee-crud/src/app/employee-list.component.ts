import { Observable } from "rxjs";
import { employee} from "./employee";
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})

export class EmployeelistComponent implements OnInit {
 employees: Observable<employee[]> | undefined;

  constructor(private es: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees= this.es.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.es.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}

function data(data: any) {
    throw new Error('Function not implemented.');
}

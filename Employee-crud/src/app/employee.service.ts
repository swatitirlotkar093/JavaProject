import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseurl =  'http://localhost:8086/addEmployee';
  private baseurl1 = 'http://localhost:8086/Employees';
  private baseurl2 = 'http://localhost:8086/employee';
  private baseurl3 = 'http://localhost:8086/update';
  private baseurl4 = 'http://localhost:8086/deleteUser';

  constructor(private http: HttpClient) {

  }

  getemployee(id: number): Observable<any> {
    //return this.http.get('${this.baseurl2}/${id}');
    return this.http.get(`${this.baseurl2}/${id}`);
    //return this.http.get('http://localhost:8086/employee/${id}');
  }

  createemployee(employee: object): Observable<Object> {
    //return this.http.post('$(this.baseurl}', employee);
    return this.http.post("http://localhost:8086/addEmployee", employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    //return this.http.put(`${this.baseurl3}/${id}`, value);
    return this.http.put(`${this.baseurl3}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl4}/${id}`, { responseType: 'text' });
    //return this.http.delete(`${this.baseurl4}/${id}`);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseurl1}`);
  }

}

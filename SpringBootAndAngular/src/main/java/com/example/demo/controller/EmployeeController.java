package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.service.EmpService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
class EmployeeController {
	
	@Autowired
	private EmpService empservice;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addEmployee")
	public Employee addEmp(@Valid @RequestBody Employee employee)
	{
		return empservice.SaveEmployee(employee);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/Employees")
	public List<Employee> findAllEmployees()
	{
	    return empservice.getAllEmployees();
	}
	/*
	 * @GetMapping("/employee/{id}") public Employee findEmployeeById(@PathVariable
	 * int id) { return empservice.getEmployeeById(id); }
	 */
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> findEmployeeById(@PathVariable int id) 
	{
		 Employee emp = empservice.getEmployeeById(id);
		  System.out.println("Employee value is"+emp);
		  if(emp==null) {
		         throw new ResourceNotFoundException("Employee not found for id : " + id);
		    }
		    return new ResponseEntity<Employee>(emp, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id")int id, @Valid @RequestBody Employee emp)
	{
		 Employee employee = empservice.updateEmployee(id,emp);
		  System.out.println("employee value is"+employee);
		  if(employee==null) {
		         throw new ResourceNotFoundException("Employee not found for id : " + id);
		    }
		    return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}

	/*
	 * @DeleteMapping("/deleteUser/{id}") public String deleteUser(@PathVariable int
	 * id) { return empservice.deleteEmployee(id); }
	 */
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable int id)
	{
		String msg = empservice.deleteEmployee(id);
		if(msg==null) {
	         throw new ResourceNotFoundException("Employee not found for id : " + id);
	    }
	    return new ResponseEntity<String>(msg, HttpStatus.OK);
	}
	
	
}

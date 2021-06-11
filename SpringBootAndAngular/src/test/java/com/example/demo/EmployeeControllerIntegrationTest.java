package com.example.demo;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.text.ParseException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;
import com.example.demo.model.Employee;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class EmployeeControllerIntegrationTest {
    
	@Autowired
	private TestRestTemplate restTemplate;
	
	@LocalServerPort
	private int port;
	
	private String getRootUrl()
	{
		return "http://localhost:"+port;
	}
	
		@Test
		public void contextLoads()
		{
			
		}

	  @Test 
	  public void testGetEmployeeById() 
	  { 
	  Employee employee =restTemplate.getForObject(getRootUrl() + "/employee/13", Employee.class);
	  System.out.println(employee.getFirstname()); assertNotNull(employee); 
	  }
	  
	  @Test 
	  public void testCreateEmployee() throws ParseException 
	  { 
		  Employee employee = new Employee();
		  employee.setFirstname("sonali");
		  employee.setLastname("dhuri");
		  employee.setEmail("sonalid@gmail.com");
	      ResponseEntity<Employee> postResponse = restTemplate.postForEntity(getRootUrl() + "/addEmployee", employee,Employee.class);
	      assertNotNull(postResponse); assertNotNull(postResponse.getBody()); 
	  }
	 
	  @Test 
	  public void testUpdateEmployee() throws ParseException 
	  { 
		  Employee employee = restTemplate.getForObject(getRootUrl() + "/employee/33", Employee.class);
		  System.out.println("getrooturl"+getRootUrl());
		  System.out.println(employee.getFirstname()); 
		  employee.setLastname("Tirlotkar");
		  restTemplate.put(getRootUrl() + "/update/33", employee);
		  Employee updatedEmployee =restTemplate.getForObject(getRootUrl() + "/employee/33", Employee.class);
		  System.out.println("updatedEmployee is::"+updatedEmployee);
		  assertNotNull(updatedEmployee); 
	  }
	  
	  @Test 
	  public void testDeleteEmployee()
	  { 
		  int id = 16; 
		  Employee employee=restTemplate.getForObject(getRootUrl() + "/employee/" + id, Employee.class);
	      assertNotNull(employee); 
	      restTemplate.delete(getRootUrl() + "/deleteUser/" + id);
	      try { 
	    	 employee= restTemplate.getForObject(getRootUrl() + "/employee/" + id,Employee.class); 
	    	  } 
	      catch (final HttpClientErrorException e) 
	      {
	       assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND); 
	      } 
	  }
	 

      @Test 
	  public void testGetAllEmployees() 
	  { 
	  HttpHeaders headers = new HttpHeaders(); 
	  HttpEntity<String> entity = new HttpEntity<String>(null,headers);
	  ResponseEntity<String> response =restTemplate.exchange(getRootUrl() + "/Employees", HttpMethod.GET, entity,
	  String.class); 
	  assertNotNull(response.getBody()); 
	  }
	  
}

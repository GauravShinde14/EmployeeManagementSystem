package com.gaurav.restweb.Controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gaurav.restweb.model.Employee;
import com.gaurav.restweb.service.EmployeeService;

@RestController
@RequestMapping("/restweb")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	EmployeeService empser;
	
	@GetMapping("/employee")
	public List<Employee> getAll(){
		return empser.getAll();
	}
	
	@PostMapping("/employee")
	public Employee insert(@RequestBody Employee emp) {
		return empser.insert(emp);
		
	}
	
	@PutMapping("/employee/{id}")
	public Employee update(@PathVariable Long id, @RequestBody Employee emp) {
		return empser.update(id, emp);
		
	}
	
//	@GetMapping("/employee/{id}")
//	public ResponseEntity<Employee> search(@PathVariable Long id){
//		Employee e = empser.findById(id);
//		if(e==null) {
//			return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
//		}else {
//			return new ResponseEntity<Employee>(e,HttpStatus.OK);
//		}
//	}// this method is used for resonseEntity which gives object and status code too.
	@GetMapping("/employee/{id}")
	public Employee search(@PathVariable Long id){
		Employee e = empser.findById(id);
		return e;
	}
	
	@DeleteMapping("/employee/{id}")
	public void delete(@PathVariable Long id){
		
		empser.deleteEmp(id);
	}
}

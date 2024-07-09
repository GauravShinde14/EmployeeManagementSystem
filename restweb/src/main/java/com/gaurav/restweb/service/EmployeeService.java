package com.gaurav.restweb.service;

import java.util.List;

import com.gaurav.restweb.model.Employee;

public interface EmployeeService {
	
	List<Employee> getAll();
	Employee insert(Employee emp);
	Employee update(Long id,Employee e);
	Employee findById(Long id);
	void deleteEmp(Long id);
}

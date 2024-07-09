package com.gaurav.restweb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.gaurav.restweb.model.Employee;
import com.gaurav.restweb.repository.EmployeeRepository;

@Service
public class EmployeeServiceImplement implements EmployeeService{
	
	@Autowired
	@Qualifier("empRepo")
	EmployeeRepository empRepo;

	@Override
	public List<Employee> getAll() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

	@Override
	public Employee insert(Employee emp) {
		// TODO Auto-generated method stub
		return empRepo.save(emp);
	}

	@Override
	public Employee update(Long id,Employee emp) {
		// TODO Auto-generated method stub
		Optional<Employee> opt= empRepo.findById(id);
		
		if(opt.isPresent()) {
			Employee e = opt.get();
			e.setName(emp.getName());
			e.setDept(emp.getDept());
			e.setSalary(emp.getSalary());
			
			return empRepo.save(e);
		}
		return null;
	}

	@Override
	public Employee findById(Long id) {
		// TODO Auto-generated method stub
		Optional<Employee> opt = empRepo.findById(id);
		if(opt.isPresent()) {
			Employee e = opt.get();
			return e;
		}
		return null;
	}

	@Override
	public void deleteEmp(Long id) {
		// TODO Auto-generated method stub
		Optional<Employee> opt = empRepo.findById(id);
		if(opt.isPresent()) {
			Employee e = opt.get();
			empRepo.delete(e);
		}
		
	}

}

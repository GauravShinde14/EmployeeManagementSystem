import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

emp:Employee = new Employee()
  constructor(private es:EmployeeService,private router:Router){

  }

  submitdata(){
    this.es.insert(this.emp).subscribe((data:Employee)=>{
      if(data!=null){
        alert("Employee added successfully")
        this.router.navigate([""])
      }
    })
  }
}

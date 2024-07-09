import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [CommonModule,UpdateEmployeeComponent,FormsModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {

  emp:Employee[] = []
  constructor(private es:EmployeeService,private router:Router) {
    
  }
  ngOnInit(): void {
    this.getAllEmp()
  }
  getAllEmp(){
    this.es.getAll().subscribe((data:Employee[])=>{
      if(data!=null){
        this.emp=data
      }
    })
  }

  updateEmployee(id:any){
    this.router.navigate(['upEmp', id]);
  }
  deleteEmployee(id:any){
    this.es.delete(id).subscribe((data=>{
      console.log(data)
      alert("Employee deleted successfully  ")
      this.getAllEmp()
    }))
  }

}

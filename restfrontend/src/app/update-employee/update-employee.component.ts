import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
id:any 
emp: Employee= new Employee()

constructor(private es:EmployeeService,private activatedroute:ActivatedRoute,private router:Router){

}
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.es.getEmployeeById(this.id).subscribe(data => {
      this.emp = data;
    }, error => console.log(error));
  }


  submitdata(){
    this.es.update(this.emp, this.id).subscribe( data =>{
      alert("successfull")
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/viewEmp']);
  }
}




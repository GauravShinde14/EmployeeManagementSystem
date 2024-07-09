import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  serverurl = "http://localhost:9090/restweb"
  constructor(private http:HttpClient) { 

  }

  insert(e:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.serverurl+"/employee",e) 
  }

  getAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.serverurl+"/employee")  
  }

  update(e:Employee,id:any):Observable<Employee>{
    return this.http.put<Employee>(this.serverurl+"/employee"+"/"+id,e) 
  }

  
  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.serverurl+"/employee"+"/"+id);
  }

  // updateEmployee(id: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }
  delete(id:any):Observable<Object>{
    return this.http.delete(this.serverurl+"/employee"+"/"+id) 
  }

}

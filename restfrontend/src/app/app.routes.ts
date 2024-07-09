import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

export const routes: Routes = [
    
    {path:"addEmp",component:AddEmployeeComponent},
    {path:"viewEmp",component:ViewEmployeeComponent},
    {path:"",component:HomeComponent},
    {path:"upEmp/:id",component:UpdateEmployeeComponent}
];

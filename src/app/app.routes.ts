import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
  {
    //login page
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    //login page
    path: 'login',
    component: LoginComponent
  },
  {
    //layout
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        // employee management
        path: 'employees',
        component: EmployeeComponent
      }
    ]
  }

];

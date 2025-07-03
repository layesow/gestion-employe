import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';

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
    component: LayoutComponent
  }

];

import { Routes } from '@angular/router';
import {RegisterComponent}  from './auth/layout/register/register.component';
import {LayoutComponent} from './auth/layout/layout.component';
import {LoginComponent} from './auth/layout/login/login.component';

export const routes: Routes = [
  {path: '', component: LayoutComponent,
  children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
  ]},
];

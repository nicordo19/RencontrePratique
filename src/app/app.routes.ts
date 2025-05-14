import { Routes } from '@angular/router';
import {RegisterComponent}  from './auth/layout/register/register.component';
import {LayoutComponent} from './auth/layout/layout.component';
import {LoginComponent} from './auth/layout/login/login.component';
import {ProfilComponent} from './auth/layout/profil/profil.component';
import {AccueilComponent} from './auth/layout/Accueil/accueil.component';
import {LikesComponent} from './auth/layout/likes/likes.component';

export const routes: Routes = [
  {path: '',
    component: LayoutComponent,
  children: [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'likes', component: LikesComponent}
  ]},
  { path: '**', redirectTo: 'login' } // redirection par défaut
];

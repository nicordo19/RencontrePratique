import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {}
  register(userData : any){
    this.http.post('http://localhost:8080/register',userData);
    return this.http.post('http://localhost:8080/register',userData);
  }
login(loginData : any){
    this.http.post('http://localhost:8080/login',loginData);
    return this.http.post('http://localhost:8080/login',loginData);
}
}

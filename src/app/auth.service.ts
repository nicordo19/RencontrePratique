import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : HttpClient) {}

  register(userData : any){
    return this.http.post('http://localhost:8080/register',userData);
  }
login(loginData : any){

  return this.http.post('http://localhost:8080/login',loginData);
}
  }

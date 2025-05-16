import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post('http://localhost:8080/register', userData, {
      withCredentials: true,
      responseType: 'text' // ou 'json' si ton backend renvoie du JSON
    });
  }

  login(loginData: any) {
    return this.http.post('http://localhost:8080/login', loginData, {
      withCredentials: true, // ✅ active l’envoi et la réception des cookies
      responseType: 'text'   // ✅ car ton backend renvoie une chaîne simple
    });
  }
}

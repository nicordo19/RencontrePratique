import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  onSubmit() {
    console.log("Email :", this.email);
    console.log("Password :", this.password);
  }
}

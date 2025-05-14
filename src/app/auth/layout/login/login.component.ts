import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth.service';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public log : string = "connexion"
  public email : string = "";
  public  password: string= "" ;
  public title : string =" Connexion";


  constructor(private authService: AuthService, private router: Router) {
  }
  loginForm(): void {
    const userId = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(userId).subscribe({
      next: (response: any) => {
        console.log("Connexion réussie", response);
        // this.router.navigate(['/accueil']); // Redirection possible ici
      },
      error: (err: any) => {
        console.log("Problème avec la connexion", err);
      }
    });
  }

}

import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../auth.service';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [
    RouterOutlet, FormsModule, NgForOf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

public firstname : string = "";
public lastname : string = "";
public email : string = "";
public password : string = "";


constructor(private router : Router , private authService : AuthService) {
}
ngOnInit() {

}
goToLogin(){
  this.router.navigate(["/login"]).then(r => true)
}
submitForm(){
  this.router.navigate(['/register']);
  const userData = {
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    password: this.password,

  };


  this.authService.register(userData).subscribe({
    next:(response:any) =>{
      console.log("reussite",response);
      this.router.navigate(['/login']);
      },
 error:(err:any)=>{
      console.log("erreur de l'enregistrement de l'user", err);
 }
  })
}
}

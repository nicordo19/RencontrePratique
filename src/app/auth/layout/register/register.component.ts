import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../auth.service';


@Component({
  selector: 'app-register',
  imports: [
    RouterOutlet, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
title : string = "INSCRIPTION";

public firstname : string = "";
public lastname : string = "";
public email : string = "";
public password : string = "";


constructor(private router : Router , private authService : AuthService) {
}
ngOnInit() {

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

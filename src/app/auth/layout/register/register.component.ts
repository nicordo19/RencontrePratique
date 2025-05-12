import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
title : string = "INSCRIPTION";

public firstName : string = "";
public lastName : string = "";
public email : string = "";
public password : string = "";
public confirmPassword : string = "";
public birdthdays : Date = new Date();
public orientation: string= "";
public date_init = new Date();
public age : String="";

constructor(private router : Router) {
}
ngOnInit() {

}
submitForm(){
  this.router.navigate(['/login']);
}
}

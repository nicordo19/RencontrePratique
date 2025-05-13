import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public log : string = "connexion"
  public Email : string = "";
  public  password: string= "" ;
  public title : string =" Connexion";

  constructor() {
  }


}

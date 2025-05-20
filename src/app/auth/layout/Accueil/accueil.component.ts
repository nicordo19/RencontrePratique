import { Component,OnInit } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-accueil',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

  accueilMessage: string = "";

   constructor(private authService: AuthService , private router: Router) { }

   ngOnInit(): void {

     this.authService.getAccueil().subscribe({
       next: (res: string) => {
         this.accueilMessage = "accée autorisé"

         this.accueilMessage = res;

       },
       error: (err) => {
         if(err.status === 401){

           this.router.navigate(['login']);
           this.accueilMessage = " Accès refusé : vous devez être connecté";

         }else {
           this.router.navigate(['login']);
           this.accueilMessage = "une erreur esr survenue !";
         }
       }
     });
   }
}
